const express = require("express");
const router = express.Router();


// Temporary Admin Login

router.post("/login", async(req,res)=>{


try{


const {email,password}=req.body;



// Default Admin Credentials

if(
email==="admin@lnmu.com" &&
password==="admin123"
){


return res.json({

message:"Login successful",

token:"admin-token-123",

admin:{

name:"Admin",

email:"admin@lnmu.com"

}

});


}



res.status(401).json({

message:"Invalid email or password"

});



}

catch(error){


res.status(500).json({

message:error.message

});


}



});



module.exports = router;