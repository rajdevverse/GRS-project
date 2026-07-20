const express = require("express");
const router = express.Router();

const College = require("../models/College");
const Session = require("../models/Session");
const ComplaintType = require("../models/ComplaintType");




// ================= ADMIN LOGIN =================


router.post("/login", async(req,res)=>{

try{

const {email,password}=req.body;


if(
email==="admin@lnmu.com" &&
password==="admin123"
){

return res.json({

message:"Login successful",

token:"admin-token-123",

admin:{
name:"Admin",
email:"admin@lnmu.com"
}

});

}


res.status(401).json({

message:"Invalid email or password"

});


}

catch(error){

res.status(500).json({

message:error.message

});

}

});









// =================================================
//                  COLLEGE MANAGEMENT
// =================================================


// ADD COLLEGE

router.post("/college", async(req,res)=>{

try{


const college = await College.create({

name:req.body.name,

createdBy:"Admin"

});


res.status(201).json(college);


}

catch(error){

res.status(500).json({

message:error.message

});

}

});








// GET ALL COLLEGES


router.get("/college", async(req,res)=>{

try{


const colleges = await College.find()
.sort({createdAt:-1});


res.json(colleges);


}

catch(error){

res.status(500).json({

message:error.message

});

}

});








// DELETE COLLEGE


router.delete("/college/:id", async(req,res)=>{

try{


await College.findByIdAndDelete(

req.params.id

);



res.json({

message:"College deleted successfully"

});


}

catch(error){

res.status(500).json({

message:error.message

});

}

});








// UPDATE COLLEGE


router.put("/college/:id", async(req,res)=>{

try{


const college = await College.findByIdAndUpdate(

req.params.id,

{

name:req.body.name

},

{

new:true

}

);


res.json(college);


}

catch(error){

res.status(500).json({

message:error.message

});

}

});











// =================================================
//                  SESSION MANAGEMENT
// =================================================



// ADD SESSION


router.post("/session", async(req,res)=>{

try{


const session = await Session.create({

name:req.body.name,

createdBy:"Admin"

});


res.status(201).json(session);


}

catch(error){

res.status(500).json({

message:error.message

});

}

});










// GET ALL SESSIONS


router.get("/session", async(req,res)=>{

try{


const sessions = await Session.find()
.sort({createdAt:-1});


res.json(sessions);


}

catch(error){

res.status(500).json({

message:error.message

});

}

});










// DELETE SESSION


router.delete("/session/:id", async(req,res)=>{

try{


await Session.findByIdAndDelete(

req.params.id

);



res.json({

message:"Session deleted successfully"

});


}

catch(error){

res.status(500).json({

message:error.message

});

}

});










// UPDATE SESSION


router.put("/session/:id", async(req,res)=>{

try{


const session = await Session.findByIdAndUpdate(

req.params.id,

{

name:req.body.name

},

{

new:true

}

);



res.json(session);


}

catch(error){

res.status(500).json({

message:error.message

});

}

});











// =================================================
//              COMPLAINT TYPE MANAGEMENT
// =================================================




// ADD COMPLAINT TYPE


router.post("/complaint-types", async(req,res)=>{


try{


const complaintType = await ComplaintType.create({

name:req.body.name,

createdBy:"Admin"

});


res.status(201).json(complaintType);


}

catch(error){


res.status(500).json({

message:error.message

});


}


});









// GET ALL COMPLAINT TYPES


router.get("/complaint-types", async(req,res)=>{


try{


const complaintTypes = await ComplaintType.find()
.sort({createdAt:-1});


res.json(complaintTypes);


}

catch(error){


res.status(500).json({

message:error.message

});


}


});









// DELETE COMPLAINT TYPE


router.delete("/complaint-types/:id", async(req,res)=>{


try{


await ComplaintType.findByIdAndDelete(

req.params.id

);



res.json({

message:"Complaint type deleted successfully"

});


}

catch(error){


res.status(500).json({

message:error.message

});


}


});









// UPDATE COMPLAINT TYPE


router.put("/complaint-types/:id", async(req,res)=>{


try{


const complaintType = await ComplaintType.findByIdAndUpdate(

req.params.id,

{

name:req.body.name

},

{

new:true

}

);



res.json(complaintType);


}

catch(error){


res.status(500).json({

message:error.message

});


}


});







module.exports = router;