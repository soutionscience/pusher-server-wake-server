let mongoose = require('mongoose');
const schema = mongoose.Schema;


let user = new schema(
    {
        number: String,
        trips:{type: mongoose.Schema.Types.ObjectId,
            ref: 'trip'},

    }
)
module.exports = mongoose.model('user', user)