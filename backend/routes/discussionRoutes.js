const express = require("express");
const router = express.Router();

const Discussion = require("../models/Discussion");



// GET ALL QUESTIONS

router.get("/", async(req,res)=>{

try{


const discussions = await Discussion.find()
.sort({
createdAt:-1
});


res.json(discussions);


}
catch(error){

console.log(error);

res.status(500).json({
message:"Server Error"
});

}

});






// ADD QUESTION

router.post("/", async(req,res)=>{


try{


const discussion = new Discussion({

user:req.body.user,

question:req.body.question

});


await discussion.save();


res.json(discussion);


}
catch(error){

console.log(error);

res.status(500).json({
message:"Server Error"
});

}

});






// DELETE QUESTION

router.delete("/:id", async(req,res)=>{


try{


await Discussion.findByIdAndDelete(
req.params.id
);


res.json({

message:"Question Deleted"

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