let Country = require('../model/country.model')
exports.get =(req, res, next)=>{
    Country.find({})
    .exec((err, resp)=>{
        if(err) res.status(400).send("error geting countries");
        res.status(200).json(resp)

    })

}

exports.getActive = (req, res, next)=>{
    let query = {active: true}
    Country.find(query)
    .exec((err, resp)=>{
        if(err) res.status(400).send("error geting countries");
        res.status(200).json(resp)

    })


}

exports.delete =(req, res, next)=>{

}

exports.setActive = (req, res, next)=>{
    //console.log('hitting one')
    let query = {_id: req.params.id}
    console.log('hitting one')
  Country.findOne(query)
  .exec((err, resp)=>{
      if(err){
          res.status(400).send("error finding country")
      }else{
          resp.active = true
          resp.save((err, resp)=>{
              if(err) res.status(400).send("error saving country")
              res.status(200).json(resp)
          })
      }
  })
}

exports.post = (req, res, next)=>{

}

// function end(err, resp){
//     if(err) res

// }