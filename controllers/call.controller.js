let Call = require('../model/call.model') 
exports.post = (req, res, next)=>{
    Call.find({}, (err, resp)=>{
        if(err) throw err;
        console.log("resp ", resp.length)
        if(resp.length == 0){
          let newCount = new Call(req.body)
          newCount.save((err, resp)=>{
              if(err) throw err
              res.status(200).json(resp)
          })
        }else{
            resp[0].count++
            resp[0].save((err, data)=>{
                if(err) throw err;
                res.status(200).json(data)
            })

        }
    })

    
    //res.status(200).json(req.body)
}

exports.get =(req, res, next)=>{
    Call.find({}, function(err, resp){
        if(err) throw err;
        res.json(resp)
    })
}