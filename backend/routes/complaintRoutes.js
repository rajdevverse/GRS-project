const express = require("express");
const router = express.Router();

const Complaint = require("../models/Complaint");




// Submit Complaint
router.post("/", async (req, res)=>{

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







// Get all complaints (Admin)
router.get("/", async(req,res)=>{

    try{


        const complaints = await Complaint.find()

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








// Get complaints of a specific user
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








// Update complaint status (Admin)
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