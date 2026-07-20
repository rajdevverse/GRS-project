const mongoose = require("mongoose");


const sessionSchema = new mongoose.Schema(
{

name:{
type:String,
required:true,
trim:true
},


createdBy:{
type:String,
default:"Admin"
}

},
{
timestamps:true
}

);


module.exports = mongoose.model(
"Session",
sessionSchema
);