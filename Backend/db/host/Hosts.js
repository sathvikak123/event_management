const mongoose = require('mongoose');

const hostSchema = new mongoose.Schema({
    email: String,
    password: String,
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"host",
        
    }
})

module.exports =mongoose.model('Hosts',hostSchema)