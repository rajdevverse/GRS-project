const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
        trim:true
    },


    fatherName:{
        type:String,
        trim:true
    },


    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },


    mobile:{
        type:String,
        trim:true
    },


    college:{
        type:String,
        trim:true
    },


    course:{
        type:String,
        trim:true
    },


    department:{
        type:String,
        trim:true
    },


    semester:{
        type:String
    },


    session:{
        type:String
    },


    enrollment:{
        type:String,
        trim:true
    },


    dob:{
        type:String
    },


    gender:{
        type:String
    },


    address:{
        type:String,
        trim:true
    },


    password:{
        type:String,
        required:true,
        minlength:6
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

    timestamps:true,


    toJSON:{
        transform:function(doc,ret){

            delete ret.password;

            return ret;

        }
    }

});



module.exports = mongoose.model("User", userSchema);