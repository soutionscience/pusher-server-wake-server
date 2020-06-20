let mongoose = require('mongoose');
const { stringify } = require('querystring');
const schema = mongoose.Schema;


let user = new schema(
    {
        number: String,
        trips:[{type: mongoose.Schema.Types.ObjectId,
            ref: 'trip'}],
        plan: {type: mongoose.Schema.Types.ObjectId},
        country: String,
        language: String


    }
)
module.exports = mongoose.model('user', user)