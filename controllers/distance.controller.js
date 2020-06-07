let Distance = require('../model/distance.model')
exports.get =(req, res, next)=>{
    Distance.find({}, function(err, resp){
        if(err) throw err;
        res.json(resp)
    })
}