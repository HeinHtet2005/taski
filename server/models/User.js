const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required: true
    },
    profile:{
        type:String,
    },
    bio:{
        type:String,
        
    }
},{timestamps:true})


module.exports = module.model('User',UserSchema)