const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true,
        unique:true
    },

    password:{
        type:String,
        required:true
    },

    mobile:{
        type:String
    },

    college:{
        type:String
    },

    role:{
        type:String,
        default:"student"
    },

    status:{
        type:String,
        default:"active"
    }

},{
    timestamps:true
});


module.exports = mongoose.model("User",userSchema);