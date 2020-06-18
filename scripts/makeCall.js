require('dotenv').config()

const accountSid = process.env.twilioSID;
const authToken = process.env.twilioKey
//console.log('account sid', accountSid)
const client = require('twilio')(accountSid, authToken)


exports.post = (req, res, next)=>{
    console.log('making call');
    client.calls.create({
        twiml:'<Responce><Say>You have arrived</Say></Responce>',
        to: '+254724604800',
        from:'+13174746606'
    }, function(err, call){
        if(err){
            res.status(400).send(err)
        }else{
            res.status(200).json({"data": "call"})
        }
    })
    
}