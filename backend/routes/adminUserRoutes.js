const express = require("express");
const router = express.Router();

const User = require("../models/User");



// GET ALL USERS

router.get("/", async(req,res)=>{

try{


const users = await User.find()
.select("-password")
.sort({
createdAt:-1
});


res.json(users);


}
catch(error){

console.log(error);

res.status(500).json({
message:"Server Error"
});

}

});






// UPDATE USER

router.put("/:id", async(req,res)=>{


try{


const user = await User.findByIdAndUpdate(

req.params.id,

{
name:req.body.name,
email:req.body.email,
mobile:req.body.mobile
},

{
new:true
}

)
.select("-password");



res.json(user);



}
catch(error){

console.log(error);


res.status(500).json({
message:"Server Error"
});


}

});








// BLOCK / UNBLOCK USER

router.put("/block/:id", async(req,res)=>{


try{


const user = await User.findById(req.params.id);



user.status =
user.status==="Blocked"
?
"Active"
:
"Blocked";



await user.save();



res.json(user);



}
catch(error){

console.log(error);


res.status(500).json({
message:"Server Error"
});


}


});








// DELETE USER

router.delete("/:id", async(req,res)=>{


try{


await User.findByIdAndDelete(
req.params.id
);



res.json({
message:"User Deleted"
});


}
catch(error){

console.log(error);


res.status(500).json({
message:"Server Error"
});


}

});



module.exports = router;