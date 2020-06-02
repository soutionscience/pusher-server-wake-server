const request = require('request')

exports.get = ()=>{
    console.log('getting values')
    request(`https://maps.googleapis.com/maps/api/distancematrix/json?origins=-1.254445,36.775298&destinations=-1.261332,36.798153&language=fr-FR&key=${process.env.apiKey}`,(error, resp, body)=>{
        if(!error && resp.statusCode== 200){
            console.log('what is ', body)
        }else{
            console.log('error is ', error)
        }
    })
}