let User = require('../model/users.model');

exports.post =  (req, res, next)=>{
    console.log('hitting post')
    let newUser = new User(req.body)
    newUser.save((err, resp)=>{
        if(err){
            res.status(400).send('error creating user')
        }else{
            res.status(200).json(resp)
        }

    })


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

exports.postTrip=()=>{
    
}

