const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    email: String,
    password: String,
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"admin",
        
    }
})

module.exports =mongoose.model('admin',AdminSchema)