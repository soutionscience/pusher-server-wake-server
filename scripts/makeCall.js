require('dotenv').config()

const accountSid = process.env.twilioSID;
const authToken = process.env.twilioKey
//console.log('account sid', accountSid)
const client = require('twilio')(accountSid, authToken)


exports.call = ()=>{
    console.log('making call');
    client.calls.create({
        twiml:'<Responce><Say>You have arrived</Say></Responce>',
        to: '+254724604800',
        from:'+13174746606'
    }, function(err, call){
        if(err){
            console.log('error ', err)
        }else{
            console.log('called ',call)
        }
    })
    
}