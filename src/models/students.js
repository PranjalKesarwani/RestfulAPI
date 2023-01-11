const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true,
        unique:true

      
    },
    email: {
        type: String,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Please enter valid email");
            }
        }
     
    },
    phone:{
        type: Number,
        required:true,
        unique:true
      
    },
    address:{
        type:String,
        required:true
    }



})


//Creating a new collection
const Student = new mongoose.model('Student',studentSchema);

module.exports = Student;
