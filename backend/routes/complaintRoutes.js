const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Complaint = require("../models/Complaint");




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
// Get All Complaints (Admin)
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

router.get("/:userId", async(req,res)=>{

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
// Update Complaint Status
// =======================

router.put("/:id", async(req,res)=>{

    try{


        const complaint = await Complaint.findByIdAndUpdate(

            req.params.id,

            {

                status:req.body.status

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



        res.json({

            message:"Complaint status updated successfully",

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