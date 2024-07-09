const mongoose = require('mongoose');

const bookingschema = new mongoose.Schema({
    email:String,
    quantity:String,
    totalamount:String,
    hostName:String,
    location:String, 
    eventImage:String,
    eventName:String,
    date:String,
    time:String,
    description:String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    userName:String,
    BookingDate: {
        type: String, 
        default: () => new Date().toLocaleDateString('hi-IN') 
    },  
    
})

module.exports =mongoose.model('mybookings',bookingschema)
