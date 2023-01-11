const mongoose = require("mongoose");

mongoose.set('strictQuery',true);
mongoose.connect("mongodb://localhost:27017/studentsapi").then(()=>{
    console.log("Database created!");
}).catch((e)=>{
    console.log("Database connection failed!");
})

