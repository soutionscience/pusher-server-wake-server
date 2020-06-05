const request = require('request')

exports.get = (package)=>{
   // console.log('getting values ', package[0].origin.lat)
    let originLat = package[0].origin.lat;
    let originLng = package[0].origin.lng;
    let destLat = package[1].destination.lat;
    let destLng = package[1].destination.lng;

 request(`https://maps.googleapis.com/maps/api/distancematrix/json?origins=${originLat},${originLng}&destinations=${destLat},${destLng}&language=fr-FR&key=${process.env.apiKey}`,(error, resp, body)=>{
        if(!error && resp.statusCode== 200){
         //    console.log('wewe', body)
            return body
        }else{
            return error
        }
    })
}