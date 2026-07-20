const mongoose = require("mongoose");


const complaintSchema = new mongoose.Schema({

    complaintId:{
        type:String,
        unique:true
    },


    userId:{
        type:String,
        required:true
    },


    title:{
        type:String,
        required:true
    },


    category:{
        type:String,
        required:true
    },


    description:{
        type:String,
        required:true
    },


    status:{
        type:String,
        default:"Pending"
    },


    createdAt:{
        type:Date,
        default:Date.now
    }

});


module.exports = mongoose.model("Complaint", complaintSchema);
