let User = require('../model/users.model');
const { request } = require('http');

exports.post =  (req, res, next)=>{
    console.log('hitting post')
    let newUser = new User(req.body)
    newUser.save((err, resp)=>{
        if(err){
            console.log('error creating user ', err)
            res.status(400).send(err)
        }else{

            resp.sendAuthyToken(postSend)
            res.status(200).json(resp)
        }

    })

    function postSend(err){
        console.log('what is error ', err)

    }
}
exports.get = (req, res, next)=>{
    User.find({}, function(err, resp){
        if(err) throw err;
        res.json(resp)
    })
}
exports.delete =(req, res, next)=>{
    User.deleteMany({})
    .exec(function(err, resp){
        res.status(200).send("deleted all")
    })

}

exports.verify= function(request, responce){
   // console.log('hitting verify ', request.body)
    let user  ={};

    User.findById(request.params.id, function(err, doc){
        if(err || !doc){
            console.log('user not found')
            return die('User not found for this ID')
        }
        //if you find user, lets validate the token they entered
        console.log('user found')
        user = doc;
        user.verifyAuthyToken(request.body.code, postVerify)
    });
    function postVerify(err){
        if(err){console.log(err); return die('The token you entered was invalid')}
    
    user.verified = true;
    user.save(postSave)
    
}
    // after we save the user, handle sending a confirmation

function postSave(err){
    console.log('post save called')
    if(err){
        console.log('save error')
     return die('There was a problem validating your account' + '-please enter your token again.')   
    }

    // Send confirmation text message
    const message = 'You did it! Signup complete :)';
    user.sendMessage(message, function(){
        //show success page
        console.log('send message')
        request.flash('successes', message);
        responce.status(200).json(user)
    }, function(err){
        console.log('error sending message ', err)
        request.flash('errors', 'You are signed up, but '
        + 'we could not send you a message. Our bad :(');
    })
}
function die(message) {
   // console.log('error ', message)
    request.flash('errors', message);
    responce.status(400).send(message)
}
};
// Resend a code if it was not received

exports.resend = function(request, response){
    User.findById(request.params.id, function(err, user){
        if(err || !user){
            return die('User not found for this ID')
        }
        user.sendAuthyToken(postSend);

    })
    function postSend(err) {
        if (err) {
            return die('There was a problem sending you the code - please '
                + 'retry.');
        }

        request.flash('successes', 'Code re-sent!');
        response.redirect('/users/'+request.params.id+'/verify');
    }

    // respond with an error
    function die(message) {
        request.flash('errors', message);
        response.redirect('/users/'+request.params.id+'/verify');
    }
}

