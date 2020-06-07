const mongoose= require('mongoose');
const schema = mongoose.Schema;

let Distance = new schema(
    {
    origin: String,
    destination: String,
    active: {type: Boolean, default: false }
 }
)


module.exports = mongoose.model('distance', Distance)