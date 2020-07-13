const mongoose= require('mongoose');
const Schema = mongoose.Schema;

let Call = new Schema({
    count: {type: Number, default: 0}
})


module.exports = mongoose.model('Call', Call)