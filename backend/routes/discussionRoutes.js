const express = require("express");
const router = express.Router();

const Discussion = require("../models/Discussion");




// =============================
// GET ALL DISCUSSIONS
// =============================

router.get("/", async(req,res)=>{


try{


const discussions = await Discussion.find()
.sort({
createdAt:-1
});


res.json(discussions);



}
catch(error){


console.log(
"GET Discussion Error:",
error
);


res.status(500).json({

message:error.message

});


}

});








// =============================
// CREATE DISCUSSION
// =============================


router.post("/", async(req,res)=>{


try{


console.log(
"Received Data:",
req.body
);



const discussion = new Discussion({


user:req.body.user,


question:req.body.question,


answers:0


});




await discussion.save();





res.status(201).json({

message:"Question posted successfully",

discussion

});




}
catch(error){


console.log(
"POST Discussion Error:",
error
);



res.status(500).json({

message:error.message

});


}


});









// =============================
// GET SINGLE DISCUSSION
// =============================


router.get("/:id", async(req,res)=>{


try{


const discussion = await Discussion.findById(

req.params.id

);



res.json(discussion);



}
catch(error){


res.status(500).json({

message:error.message

});


}


});









// =============================
// DELETE DISCUSSION
// =============================


router.delete("/:id", async(req,res)=>{


try{


await Discussion.findByIdAndDelete(

req.params.id

);



res.json({

message:"Deleted successfully"

});


}
catch(error){


res.status(500).json({

message:error.message

});


}


});





module.exports = router;