
const mongoose= require('mongoose');
const Schema = mongoose.Schema;

let Country = new Schema({
    name: String,
    nameAlpha2Code:String,
    nameAlpha3Code:String,
    phoneCode: String,
    language: String,
    currencyCode: String,
    lgIso639_1: String,
    lgIso639_2: String,
    flag: String,
    myFlag: String,
    active: {type: Boolean, default: false},

})

module.exports = mongoose.model('Country', Country)
