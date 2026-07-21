const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();


const app = express();



// =======================
// MIDDLEWARE
// =======================


app.use(
    cors({
        origin:"http://localhost:5173",
        credentials:true
    })
);


app.use(express.json());






// =======================
// DATABASE CONNECTION
// =======================


mongoose.connect(process.env.MONGO_URI)

.then(()=>{

    console.log(
        "MongoDB Connected"
    );

})

.catch((error)=>{


    console.log(
        "MongoDB Connection Error:",
        error.message
    );


});








// =======================
// IMPORT ROUTES
// =======================


const userRoutes = require("./routes/userRoutes");

const complaintRoutes = require("./routes/complaintRoutes");

const adminRoutes = require("./routes/adminRoutes");

const collegeRoutes = require("./routes/collegeRoutes");

const sessionRoutes = require("./routes/sessionRoutes");

const complaintTypeRoutes = require("./routes/complaintTypeRoutes");

const adminUserRoutes = require("./routes/adminUserRoutes");

const discussionRoutes = require("./routes/discussionRoutes");








// =======================
// API ROUTES
// =======================



// USERS

app.use(
    "/api/users",
    userRoutes
);




// COMPLAINTS

app.use(
    "/api/complaints",
    complaintRoutes
);





// ADMIN

app.use(
    "/api/admin",
    adminRoutes
);





// COLLEGE

app.use(
    "/api/admin/college",
    collegeRoutes
);





// SESSION

app.use(
    "/api/admin/session",
    sessionRoutes
);





// COMPLAINT TYPES

app.use(
    "/api/admin/complaint-types",
    complaintTypeRoutes
);





// ADMIN USERS

app.use(
    "/api/admin/users",
    adminUserRoutes
);







// =======================
// DISCUSSION FORUM
// =======================


app.use(
    "/api/discussions",
    discussionRoutes
);










// =======================
// TEST ROUTES
// =======================



app.get("/",(req,res)=>{


    res.send(
        "GRS Backend Running Successfully"
    );


});






app.get("/api/test",(req,res)=>{


    res.json({

        message:"API working"

    });


});









// =======================
// ERROR HANDLER
// =======================


app.use((err,req,res,next)=>{


    console.log(
        err.stack
    );


    res.status(500).json({

        message:"Something went wrong"

    });


});









// =======================
// SERVER START
// =======================


const PORT = process.env.PORT || 5000;



app.listen(PORT,()=>{


    console.log(
        `Server running on port ${PORT}`
    );


});