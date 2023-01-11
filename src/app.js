const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
require("./db/conn");
const Student = require("./models/students");//ab iss collection ki requirement student.js me hai

const studentRouter = require("./routers/student")

app.use(express.json());
app.use(studentRouter);




// app.post("/students", async (req, res) => {
//     // console.log(req.body);

//     try {
//         const user = new Student(req.body);
//         const createUser = await user.save();
//         res.status(200).send(createUser);
//     } catch (error) {
//         console.log(error);
//     }
// })

// app.get("/students", async (req, res) => {
// try {
//     const studentsData = await Student.find()
//     res.send(studentsData)
// } catch (error) {
//     console.log(error);
// }})

// app.get("/students/:id", async (req, res) => {   
// try {
//     const _id = req.params.id;
//      const singleUser= await Student.findById({_id});
//      res.send(singleUser);
// } catch (error) {
//         res.status(400).send("Error");
// }})

// app.patch("/students/:id", async (req, res) => {   
// try {
//     const _id = req.params.id;
//     const update = await Student.findByIdAndUpdate(_id,req.body,{
//         new:true
//     });
//     res.status(200).send(update);
// } catch (error) {
//         res.status(400).send("Error");
// }})

// app.delete("/students/:id", async (req,res)=>{
//     const _id = req.params.id;
//     const deleteUser = await Student.findByIdAndDelete(_id);
//     res.status(200).send(deleteUser);
// })

// app.get("*", () => {
//     res.status(404).send("Error: Page not found");
// })

app.listen(port, () => {
    console.log(`Connected to port ${port}`);
})

/*
Note:-
You do not need expressjson() and express.urlencoded() for GET requests or DELETE Requests. 
We only need it for post and put req.
express.json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object. 
This method is called as a middleware in your application using the code: app.use(express.json())
*/