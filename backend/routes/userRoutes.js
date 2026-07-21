const express = require("express");
const router = express.Router();

const User = require("../models/User");


// =======================
// USER REGISTER
// =======================

router.post("/register", async(req,res)=>{

try{

const {
name,
email,
password,
mobile,
college
}=req.body;


const existingUser = await User.findOne({
email
});


if(existingUser){

return res.status(400).json({
message:"User already exists"
});

}


const user = new User({

name,
email,
password,
mobile,
college

});


await user.save();


res.status(201).json({

message:"Registration successful",

user

});


}
catch(error){

res.status(500).json({
message:error.message
});

}

});





// =======================
// USER LOGIN
// =======================

router.post("/login", async(req,res)=>{

try{


const {
email,
password
}=req.body;



const user = await User.findOne({
email
});



if(!user){

return res.status(404).json({

message:"User not found"

});

}



if(user.password !== password){

return res.status(401).json({

message:"Invalid password"

});

}




res.json({

message:"Login successful",

user:{


id:user._id,

name:user.name,

email:user.email,

mobile:user.mobile,

college:user.college


}


});



}
catch(error){

res.status(500).json({

message:error.message

});

}


});






// =======================
// GET USER PROFILE
// =======================

router.get("/profile/:id", async(req,res)=>{


try{


const user = await User.findById(req.params.id)
.select("-password");



if(!user){

return res.status(404).json({

message:"User not found"

});

}



res.json(user);


}
catch(error){

res.status(500).json({

message:error.message

});

}


});






// =======================
// UPDATE USER PROFILE
// =======================

router.put("/:id", async(req,res)=>{


try{


const {
name,
email,
mobile,
college
}=req.body;



const user = await User.findByIdAndUpdate(

req.params.id,

{
name,
email,
mobile,
college
},

{
new:true
}

).select("-password");



if(!user){

return res.status(404).json({

message:"User not found"

});

}



res.json({

message:"Profile Updated Successfully",

user:user

});


}
catch(error){

res.status(500).json({

message:error.message

});

}


});






// =======================
// GET ALL USERS
// =======================

router.get("/", async(req,res)=>{


try{


const users = await User.find();

res.json(users);


}
catch(error){

res.status(500).json({

message:error.message

});

}


});






// =======================
// DELETE USER
// =======================

router.delete("/:id", async(req,res)=>{


try{


await User.findByIdAndDelete(req.params.id);


res.json({

message:"User deleted"

});


}
catch(error){

res.status(500).json({

message:error.message

});

}


});





module.exports = router;