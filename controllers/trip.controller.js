let trip = require('../model/trips.model');
const getdistance = require('../scripts/getDistance');
const request = require('request')



exports.postOld =  (req, res, next)=>{
    //let package = req.body
    // console.log('hitting post ', package.origin);
    // console.log('package ', package, ' first ', package.origin.lat)
    // let originLat = package[0].origin.lat;
    // let originLng = package[0].origin.lng;
    // let destLat = package[1].destination.lat;
    // let destLng = package[1].destination.lng;
    // console.log('ol ', originLat, ' og ', originLng, ' dl ', destLat, ' do ', destLng)
    // request(`https://maps.googleapis.com/maps/api/distancematrix/json?origins=${originLat},${originLng}&destinations=${destLat},${destLng}&language=fr-FR&key=${process.env.apiKey}`,(error, resp, body)=>{
    //     console.log('request?')
    //     if(!error && resp.statusCode== 200){
    //         console.log('wewe', body)
    //     res.status(200).json(resp)
    //     }else{
    //        console.log('error ', error)
    //        res.status(400).json(error)
    //     }
    // })



}
exports.postOld2 = (req, res, next)=>{
    // let package = req.body
    // // console.log('hitting post ', package.origin);
    // // console.log('package ', package, ' first ', package.origin.lat)
    // let originLat = package.origin.lat;
    // let originLng = package.origin.lng;
    // let destLat = package.destination.lat;
    // let destLng = package.destination.lng;
    // //console.log('ol ', originLat, ' og ', originLng, ' dl ', destLat, ' do ', destLng)
    // request(`https://maps.googleapis.com/maps/api/distancematrix/json?origins=${originLat},${originLng}&destinations=${destLat},${destLng}&language=fr-FR&key=${process.env.apiKey}`,(error, resp, body)=>{
    //     //console.log('request?')
    //     if(!error && resp.statusCode== 200){
    //        //console.log('wewe', body)
    //     res.status(200).json(resp)
    //     }else{
    //        //console.log('error ', error)
    //        res.status(400).json(error)
    //     }
    // })

}

exports.post = (req,res, next)=>{

}