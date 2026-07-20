const express = require("express");
const router = express.Router();

const ComplaintType = require("../models/ComplaintType");




// GET ALL COMPLAINT TYPES

router.get("/", async(req,res)=>{

try{


const types = await ComplaintType.find()
.sort({
createdAt:-1
});


res.json(types);



}catch(error){

console.log(error);


res.status(500).json({
message:"Server Error"
});


}

});







// ADD COMPLAINT TYPE

router.post("/", async(req,res)=>{


try{


const type = new ComplaintType({

name:req.body.name

});


await type.save();



res.json({

message:"Complaint Type Added",

type

});



}catch(error){

console.log(error);


res.status(500).json({
message:"Server Error"
});


}

});








// UPDATE COMPLAINT TYPE

router.put("/:id", async(req,res)=>{


try{


const updatedType = 
await ComplaintType.findByIdAndUpdate(

req.params.id,

{
name:req.body.name
},

{
new:true
}

);



res.json(updatedType);



}catch(error){

console.log(error);


res.status(500).json({
message:"Server Error"
});


}


});









// DELETE COMPLAINT TYPE

router.delete("/:id", async(req,res)=>{


try{


await ComplaintType.findByIdAndDelete(
req.params.id
);



res.json({

message:"Complaint Type Deleted"

});



}catch(error){

console.log(error);


res.status(500).json({
message:"Server Error"
});


}


});






module.exports = router;