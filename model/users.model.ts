let Mongoose = require('mongoose');
const Schema = Mongoose.Schema;


let user = new Schema(
    {
        number: String,
        trips:{type: mongoose.Schema.Types.ObjectId,
            ref: 'trip'},

    }
)
module.exports = Mongoose.model('user', user)