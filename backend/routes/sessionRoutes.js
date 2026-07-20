const express = require("express");
const router = express.Router();

const Session = require("../models/Session");



// GET ALL SESSIONS

router.get("/", async(req,res)=>{

try{

const sessions = await Session.find()
.sort({
createdAt:-1
});


res.json(sessions);


}
catch(error){

console.log(error);

res.status(500).json({
message:"Server Error"
});

}

});




// ADD SESSION

router.post("/", async(req,res)=>{

try{


const session = new Session({

name:req.body.name

});


await session.save();


res.json({
message:"Session Added",
session
});


}
catch(error){

console.log(error);

res.status(500).json({
message:"Server Error"
});

}

});




// UPDATE SESSION

router.put("/:id", async(req,res)=>{

try{


const session =
await Session.findByIdAndUpdate(

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

console.log(error);

res.status(500).json({
message:"Server Error"
});

}

});




// DELETE SESSION

router.delete("/:id", async(req,res)=>{

try{


await Session.findByIdAndDelete(
req.params.id
);


res.json({
message:"Session Deleted"
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