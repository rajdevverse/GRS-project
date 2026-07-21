const mongoose = require("mongoose");


const complaintSchema = new mongoose.Schema({

    complaintId: {

        type:String,

        unique:true,

        required:true

    },


    userId: {

        type:mongoose.Schema.Types.ObjectId,

        ref:"User",

        required:true

    },


    title: {

        type:String,

        required:true

    },


    category: {

        type:String,

        required:true

    },


    description: {

        type:String,

        required:true

    },


    status: {

        type:String,

        enum:[
            "Pending",
            "In Progress",
            "Resolved",
            "Rejected"
        ],

        default:"Pending"

    },


    adminRemark: {

        type:String,

        default:""

    }


},{

    timestamps:true

});



module.exports = mongoose.model(
    "Complaint",
    complaintSchema
);