let mongoose = require('mongoose');
const { stringify } = require('querystring');
const schema = mongoose.Schema;


let plan = schema({
    name: String,
    amount: Number,
    date: Date,

})
module.exports = mongoose.model('plan', plan)