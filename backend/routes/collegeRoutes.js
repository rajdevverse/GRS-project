const express = require("express");
const router = express.Router();

const College = require("../models/College");


// GET ALL COLLEGES
router.get("/", async(req,res)=>{

    try{

        const colleges = await College.find();

        res.json(colleges);

    }catch(error){

        console.log(error);

        res.status(500).json({
            message:"Server Error"
        });

    }

});



// ADD COLLEGE
router.post("/", async(req,res)=>{

    try{

        const college = new College({

            name:req.body.name

        });


        await college.save();


        res.json({
            message:"College Added",
            college
        });


    }catch(error){

        console.log(error);

        res.status(500).json({
            message:"Server Error"
        });

    }

});



// DELETE COLLEGE

router.delete("/:id", async(req,res)=>{

    try{

        await College.findByIdAndDelete(
            req.params.id
        );


        res.json({
            message:"College Deleted"
        });


    }catch(error){

        console.log(error);

        res.status(500).json({
            message:"Server Error"
        });

    }

});


module.exports = router;