const mongoose= require('mongoose');
const schema = mongoose.Schema;

let trip = new Schema(
    {
    origin: String,
    destination: String,
    active: {type: Boolean, default: false }
 }
)


module.exports = mongoose.model('trip', trip)