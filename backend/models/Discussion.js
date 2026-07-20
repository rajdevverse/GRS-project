const mongoose = require("mongoose");


const discussionSchema = new mongoose.Schema(
{

    user:{
        type:String,
        required:true
    },


    question:{
        type:String,
        required:true
    },


    answers:{
        type:Number,
        default:0
    }

},
{
    timestamps:true
}

);


module.exports = mongoose.model(
"Discussion",
discussionSchema
);