let Distance = require('../model/distance.model')
exports.get =(req, res, next)=>{
    console.log('hitting distance')
    Distance.find({}, function(err, resp){
        if(err) throw err;
        res.json(resp)
    })
}

exports.post = (req, res, next)=>{
    console.log('hitting get ', req.body)
    res.status(200).json(req.body)
}