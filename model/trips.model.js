const mongoose= require('mongoose');
const schema = mongoose.Schema;

let trip = new schema(
    {
    origin: String,
    destination: String,
    active: {type: Boolean, default: false }
 }
)


module.exports = mongoose.model('trip', trip)