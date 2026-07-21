const express = require("express");
const router = express.Router();

const College = require("../models/College");


// ==========================
// GET ALL COLLEGES
// ==========================

router.get("/", async(req,res)=>{

    try{

        const colleges = await College.find().sort({
            createdAt:-1
        });

        res.json(colleges);

    }catch(error){

        console.log(error);

        res.status(500).json({
            message:"Server Error"
        });

    }

});




// ==========================
// ADD COLLEGE
// ==========================

router.post("/", async(req,res)=>{

    try{

        const college = new College({

            name:req.body.name

        });


        await college.save();


        res.status(201).json({

            message:"College Added Successfully",

            college

        });


    }catch(error){

        console.log(error);

        res.status(500).json({
            message:"Server Error"
        });

    }

});




// ==========================
// UPDATE COLLEGE
// ==========================

router.put("/:id", async(req,res)=>{

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


        if(!college){

            return res.status(404).json({

                message:"College not found"

            });

        }


        res.json({

            message:"College Updated Successfully",

            college

        });


    }catch(error){

        console.log(error);

        res.status(500).json({

            message:"Server Error"

        });

    }

});




// ==========================
// BLOCK / UNBLOCK COLLEGE
// ==========================

router.put("/:id/block", async(req,res)=>{

    try{

        const college = await College.findById(req.params.id);

        if(!college){

            return res.status(404).json({

                message:"College not found"

            });

        }


        college.blocked = !college.blocked;

        await college.save();


        res.json({

            message:college.blocked
                ? "College Blocked Successfully"
                : "College Unblocked Successfully",

            college

        });


    }catch(error){

        console.log(error);

        res.status(500).json({

            message:"Server Error"

        });

    }

});




// ==========================
// DELETE COLLEGE
// ==========================

router.delete("/:id", async(req,res)=>{

    try{

        const college = await College.findByIdAndDelete(

            req.params.id

        );


        if(!college){

            return res.status(404).json({

                message:"College not found"

            });

        }


        res.json({

            message:"College Deleted Successfully"

        });


    }catch(error){

        console.log(error);

        res.status(500).json({

            message:"Server Error"

        });

    }

});


module.exports = router;