const express = require("express");
const router = express.Router();

const User = require("../models/User");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");




// =======================
// USER REGISTER
// =======================

router.post("/register", async(req,res)=>{

try{


const {

name,
fatherName,
email,
mobile,
college,
course,
department,
semester,
session,
enrollment,
dob,
gender,
address,
password

}=req.body;



const existingUser = await User.findOne({
email
});



if(existingUser){

return res.status(400).json({

message:"User already exists"

});

}



// HASH PASSWORD

const hashedPassword = await bcrypt.hash(
password,
10
);



const user = new User({

name,
fatherName,
email,
mobile,
college,
course,
department,
semester,
session,
enrollment,
dob,
gender,
address,
password:hashedPassword

});



await user.save();



res.status(201).json({

message:"Registration successful"

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






let isMatch = false;





// CHECK HASH PASSWORD

if(user.password.startsWith("$2b$")){


isMatch = await bcrypt.compare(

password,

user.password

);


}





// CHECK OLD PLAIN PASSWORD

else{


isMatch = password === user.password;



// Convert old password to hash

if(isMatch){


user.password = await bcrypt.hash(
password,
10
);


await user.save();


}


}








if(!isMatch){


return res.status(401).json({

message:"Invalid password"

});


}







const token = jwt.sign(

{

id:user._id,

role:user.role

},

process.env.JWT_SECRET,

{

expiresIn:"1d"

}

);







res.json({

message:"Login successful",

token,


user:{


id:user._id,

name:user.name,

email:user.email,

mobile:user.mobile,

college:user.college,

course:user.course,

department:user.department,

semester:user.semester,

enrollment:user.enrollment,

role:user.role


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
// GET PROFILE
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
// UPDATE PROFILE
// =======================


router.put("/:id", async(req,res)=>{


try{


const {

name,
fatherName,
mobile,
college,
course,
department,
semester,
session,
enrollment,
dob,
gender,
address


}=req.body;




const user = await User.findByIdAndUpdate(

req.params.id,

{

name,
fatherName,
mobile,
college,
course,
department,
semester,
session,
enrollment,
dob,
gender,
address

},


{

new:true

}

)
.select("-password");





if(!user){

return res.status(404).json({

message:"User not found"

});

}



res.json({

message:"Profile Updated Successfully",

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
// GET ALL USERS
// =======================


router.get("/", async(req,res)=>{


try{


const users = await User.find()
.select("-password");


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