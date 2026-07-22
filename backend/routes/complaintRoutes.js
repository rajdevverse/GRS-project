const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Complaint = require("../models/Complaint");
const User = require("../models/User");

const sendEmail = require("../utils/sendEmail");




// =======================
// Submit Complaint
// =======================

router.post("/", async(req,res)=>{

try{


const count = await Complaint.countDocuments();



const complaint = new Complaint({

    ...req.body,

    complaintId:`LNMU-2026-${String(count + 1).padStart(4,"0")}`

});



await complaint.save();




// SEND EMAIL TO ADMIN

await sendEmail(

process.env.EMAIL_USER,

"New Complaint Received - GRS Portal",

`
New complaint has been submitted.

Complaint ID:
${complaint.complaintId}


Title:
${complaint.title}


Category:
${complaint.category}


Please login to Admin Dashboard to review.

GRS Portal Team
`

);





res.status(201).json({

message:"Complaint submitted successfully",

complaint

});



}

catch(error){


console.log(error);


res.status(500).json({

message:error.message

});


}


});










// =======================
// Get All Complaints
// =======================

router.get("/", async(req,res)=>{

try{


const complaints = await Complaint.find()

.populate(

"userId",

"name email mobile college"

)

.sort({

createdAt:-1

});



res.json(complaints);



}

catch(error){


res.status(500).json({

message:error.message

});


}


});










// =======================
// User Complaint Statistics
// =======================

router.get("/stats/:userId", async(req,res)=>{


try{


if(!mongoose.Types.ObjectId.isValid(req.params.userId)){


return res.status(400).json({

message:"Invalid User ID"

});


}



const complaints = await Complaint.find({

userId:req.params.userId

});



res.json({

total:complaints.length,


pending:complaints.filter(
c=>c.status==="Pending"
).length,


resolved:complaints.filter(
c=>c.status==="Resolved"
).length,


inProgress:complaints.filter(
c=>c.status==="In Progress"
).length


});


}

catch(error){


res.status(500).json({

message:error.message

});


}


});









// =======================
// Get User Complaints
// =======================

router.get("/user/:userId", async(req,res)=>{

try{


const complaints = await Complaint.find({

userId:req.params.userId

})

.sort({

createdAt:-1

});



res.json(complaints);



}

catch(error){


res.status(500).json({

message:error.message

});


}


});










// =======================
// Get Single Complaint
// =======================

router.get("/:id", async(req,res)=>{


try{


const complaint = await Complaint.findById(req.params.id)

.populate(

"userId",

"name email mobile college"

);



if(!complaint){

return res.status(404).json({

message:"Complaint not found"

});

}



res.json(complaint);



}

catch(error){


res.status(500).json({

message:error.message

});


}


});









// =======================
// Update Complaint Status
// =======================

router.put("/:id", async(req,res)=>{


try{


const complaint = await Complaint.findByIdAndUpdate(

req.params.id,

{

status:req.body.status,

adminRemark:req.body.adminRemark

},

{

new:true

}

);





if(!complaint){


return res.status(404).json({

message:"Complaint not found"

});


}






// GET STUDENT DETAILS

const student = await User.findById(

complaint.userId

);






if(student){



await sendEmail(

student.email,


"GRS Complaint Status Updated",


`
Hello ${student.name},


Your complaint status has been updated.


Complaint ID:

${complaint.complaintId}



Title:

${complaint.title}



New Status:

${complaint.status}



Admin Remark:

${complaint.adminRemark || "No remark added"}



Thank you.

GRS Portal Team

`

);



}







res.json({

message:"Complaint updated successfully",

complaint

});



}

catch(error){


console.log(error);



res.status(500).json({

message:error.message

});


}


});







module.exports = router;