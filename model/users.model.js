let mongoose = require('mongoose');
const { stringify } = require('querystring');
const schema = mongoose.Schema;

require('dotenv').config()
authKey = process.env.authyKey
const authy = require('authy')(authKey);
const accountSid = process.env.twilioSID;
const authToken = process.env.twilioKey
//console.log('account sid', accountSid)
const twilioClient = require('twilio')(accountSid, authToken)



// let user = new schema(
//     {
//         number: String,
//         trips:[{type: mongoose.Schema.Types.ObjectId,
//             ref: 'trip'}],
//         plan: {type: mongoose.Schema.Types.ObjectId},
//         country: String,
//         language: String


//     }
// )
const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: false,
    },
    countryCode: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    verified: {
        type: Boolean,
        default: false,
    },
    authyId: String,
    email: {
        type: String,
        required: false,
        unique: true,
    },
    password: {
        type: String,
        required: false,
    },
});


//authy stuff

UserSchema.methods.sendAuthyToken = function(cb){
    let self = this;
    if(!self.authyId){
      authy.register_user(self.email, self.phone, self.countryCode, function(err, resp){
          if(err || !resp.user){
              console.log('error authy.register user ', err);
              return cb.call(self, err)
          }
          self.authyId = resp.user.id;
          self.save(function(err, doc){
              if(err || !doc) return cb.call(self, err);
              self = doc
              sendToken()
          });
      });  
    }else{
        sendToken()
    }

    function sendToken(){
        authy.request_sms(self.authyId, true, function(err, resp){
            cb.call(self, err)
        })
    }
}

UserSchema.methods.verifyAuthyToken = function(opt, cb){
    console.log('user verify called ', opt)
    const self = this;
    authy.verify(self.authyId, opt, function(err, resp){
        console.log('what is error ', err),
        console.log('what is resp ', resp)
        cb.call(self, err, resp)
    })
}
UserSchema.methods.sendMessage =
  function(message, successCallback, errorCallback) {
      const self = this;
      const toNumber = `+${self.countryCode}${self.phone}`;

      twilioClient.messages.create({
          to: toNumber,
          from: process.env.usNumber,
          body: message,
      }).then(function() {
        successCallback();
      }).catch(function(err) {
        errorCallback(err);
      });
  };
module.exports = mongoose.model('UserSchema', UserSchema)