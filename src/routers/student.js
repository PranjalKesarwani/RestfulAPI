const express = require("express");
const Student = require("../models/students");

// const app = express();

const router = new express.Router();
router.post("/students", async (req, res) => {
        // console.log(req.body);
    
        try {
            const user = new Student(req.body);
            const createUser = await user.save();
            res.status(200).send(createUser);
        } catch (error) {
            console.log(error);
        }
    })
    
    router.get("/students", async (req, res) => {
    try {
        const studentsData = await Student.find()
        res.send(studentsData)
    } catch (error) {
        console.log(error);
    }})
    
    router.get("/students/:id", async (req, res) => {   
    try {
        const _id = req.params.id;
         const singleUser= await Student.findById({_id});
         res.send(singleUser);
    } catch (error) {
            res.status(400).send("Error");
    }})
    
    router.patch("/students/:id", async (req, res) => {   
    try {
        const _id = req.params.id;
        const update = await Student.findByIdAndUpdate(_id,req.body,{
            new:true
        });
        res.status(200).send(update);
    } catch (error) {
            res.status(400).send("Error");
    }})
    
    router.delete("/students/:id", async (req,res)=>{
        const _id = req.params.id;
        const deleteUser = await Student.findByIdAndDelete(_id);
        res.status(200).send(deleteUser);
    })
    
    router.get("*", () => {
        res.status(404).send("Error: Page not found");
    })

module.exports = router;

