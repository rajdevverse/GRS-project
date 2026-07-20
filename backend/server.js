const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();


const app = express();


// =======================
// MIDDLEWARE
// =======================

app.use(cors());

app.use(express.json());




// =======================
// DATABASE CONNECTION
// =======================

mongoose.connect(process.env.MONGO_URI)

.then(()=>{

    console.log("MongoDB Connected");

})

.catch((error)=>{

    console.log("MongoDB Error:",error);

});





// =======================
// ROUTES
// =======================

const userRoutes = require("./routes/userRoutes");

const complaintRoutes = require("./routes/complaintRoutes");

const adminRoutes = require("./routes/adminRoutes");





app.use("/api/users", userRoutes);

app.use("/api/complaints", complaintRoutes);

app.use("/api/admin", adminRoutes);





// =======================
// TEST ROUTE
// =======================

app.get("/",(req,res)=>{

    res.send("GRS Backend Running");

});





// =======================
// SERVER START
// =======================


const PORT = process.env.PORT || 5000;



app.listen(PORT,()=>{

    console.log(`Server running on port ${PORT}`);

});