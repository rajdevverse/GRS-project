const express = require("express");
const router = express.Router();

const Complaint = require("../models/Complaint");
const User = require("../models/User");
const Admin = require("../models/Admin");



// =========================
// ADMIN LOGIN
// =========================

router.post("/login", async(req,res)=>{

try{

const {email,password}=req.body;


const admin = await Admin.findOne({
email
});


if(!admin){

return res.status(404).json({
message:"Admin not found"
});

}



if(admin.password !== password){

return res.status(401).json({
message:"Invalid password"
});

}



res.json({

message:"Login successful",

admin:{
id:admin._id,
name:admin.name,
email:admin.email
}

});


}
catch(error){

console.log(error);

res.status(500).json({
message:"Server Error"
});

}

});







// =========================
// CHANGE PASSWORD
// =========================

router.put("/change-password", async(req,res)=>{


try{


const {
email,
oldPassword,
newPassword
}=req.body;



const admin = await Admin.findOne({
email
});



if(!admin){

return res.status(404).json({
message:"Admin not found"
});

}



if(admin.password !== oldPassword){

return res.status(400).json({
message:"Old password incorrect"
});

}



admin.password = newPassword;

await admin.save();



res.json({

message:"Password changed successfully"

});


}
catch(error){

console.log(error);


res.status(500).json({

message:"Server Error"

});

}


});








// =========================
// DASHBOARD STATS
// =========================

router.get("/stats", async(req,res)=>{


try{


const totalComplaints =
await Complaint.countDocuments();


const pending =
await Complaint.countDocuments({
status:"Pending"
});


const resolved =
await Complaint.countDocuments({
status:"Resolved"
});


const rejected =
await Complaint.countDocuments({
status:"Rejected"
});


const users =
await User.countDocuments();



res.json({

totalComplaints,

pending,

resolved,

rejected,

users

});


}
catch(error){

console.log(error);


res.status(500).json({

message:"Server Error"

});

}


});









// =========================
// GET ALL COMPLAINTS
// =========================

router.get("/complaints", async(req,res)=>{


try{


const complaints =
await Complaint.find()

.populate(
"userId",
"name email"
)

.sort({
createdAt:-1
});



res.json(complaints);



}
catch(error){

console.log(error);


res.status(500).json({

message:"Server Error"

});

}


});










// =========================
// GET SINGLE COMPLAINT
// =========================

router.get("/complaints/:id", async(req,res)=>{


try{


const complaint =
await Complaint.findById(
req.params.id
)

.populate(
"userId",
"name email"
);



if(!complaint){

return res.status(404).json({

message:"Complaint not found"

});

}



res.json(complaint);



}
catch(error){

console.log(error);


res.status(500).json({

message:"Server Error"

});

}


});









// =========================
// UPDATE COMPLAINT STATUS
// =========================

router.put("/complaints/:id", async(req,res)=>{


try{


const updatedComplaint =

await Complaint.findByIdAndUpdate(

req.params.id,

{

status:req.body.status,

adminRemark:req.body.adminRemark

},

{
new:true
}

);



if(!updatedComplaint){

return res.status(404).json({

message:"Complaint not found"

});

}



res.json(updatedComplaint);



}
catch(error){

console.log(error);


res.status(500).json({

message:"Server Error"

});

}


});









// =========================
// DELETE COMPLAINT
// =========================

router.delete("/complaints/:id", async(req,res)=>{


try{


const deletedComplaint =

await Complaint.findByIdAndDelete(
req.params.id
);



if(!deletedComplaint){

return res.status(404).json({

message:"Complaint not found"

});

}



res.json({

message:"Complaint deleted successfully"

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