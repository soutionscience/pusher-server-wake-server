const mongoose= require('mongoose');
const schema = mongoose.Schema;

let trip = new schema(
    {
    phone: String,    
    origin: String,
    destination: String,
    active: {type: Boolean, default: false },
    initialized: {type: Boolean, default: false },
    called: {type: Boolean, default: false},
    estimatedTime: Number,
    fence: String
 }
)


module.exports = mongoose.model('trip', trip)