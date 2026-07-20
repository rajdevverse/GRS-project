const mongoose = require("mongoose");


const complaintTypeSchema = new mongoose.Schema({

name:{
type:String,
required:true
},


createdBy:{
type:String,
default:"Admin"
}


},
{
timestamps:true
});


module.exports = mongoose.model(
"ComplaintType",
complaintTypeSchema
);