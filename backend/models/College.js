const mongoose = require("mongoose");


const collegeSchema = new mongoose.Schema(
{

    name: {
        type: String,
        required: true,
        trim: true
    },


    createdBy: {
        type: String,
        default: "Admin",
        trim: true
    }

},
{
    timestamps: true
}

);



module.exports = mongoose.model(
    "College",
    collegeSchema
);