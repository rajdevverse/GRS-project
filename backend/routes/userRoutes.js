const express = require("express");
const router = express.Router();

const User = require("../models/User");


// Register User

router.post("/register", async(req,res)=>{

    try{

        const {name,email,password,mobile}=req.body;


        const existingUser = await User.findOne({email});


        if(existingUser){
            return res.status(400).json({
                message:"User already exists"
            });
        }


        const user = new User({
            name,
            email,
            password,
            mobile
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
// User Login

router.post("/login", async(req,res)=>{

    try{

        const {email,password}=req.body;


        const user = await User.findOne({email});


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


        res.status(200).json({

            message:"Login successful",

            user:{
                id:user._id,
                name:user.name,
                email:user.email
            }

        });


    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

});

module.exports = router;