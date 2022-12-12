// const express = require('express');
// const app = express();
// const mongoose = require('mongoose')
// const bodyParser = require('body-parser');
// const {TextDecoder, TextEncoder} = require("util");

// app.use(bodyParser.urlencoded({extended:true}));
// app.use(express.static(__dirname + '/public'));


// // MongoDB connection
// mongoose.connect("mongodb+srv://shirish_35:shirish35@cluster0.bs1p3.mongodb.net/patient",{useNewUrlParser:true},{useUnifiedTopology:true});
// // create a data schema
// const patientSchema = {
//     fName: String,
//     lName: String,
//     eMail: String,
//     mobile: Number,
//     gender: String,
//     age: Number,
//     address: String,
//     smoker: String,
//     cOAlcohol: String,
//     sugarLevel: Number,
//     bloodPressure: Number,
//     allergy: String,
//     disease: String
    
// }
// const patient_model = mongoose.model("patient_details", patientSchema);

// // Route to display the Homepage
// app.get('/', function(req, res) {
//     console.log('Hello World');
//     res.sendFile(__dirname + 'D:\practiceProjects\public/index.html');
// });

// //Posting form data to MongoDB
// app.post("/",function(req,res){
//     let newPatient = new patient_model({
//         fName: req.body.fName,
//         lName: req.body.lName,
//         eMail: req.body.eMail,
//         mobile: req.body.mobile,
//         gender: req.body.gender,
//         age: req.body.age,
//         address: req.body.address,
//         smoker: req.body.smoker,
//         cOAlcohol: req.body.alcohol,
//         sugarLevel: req.body.sugar,
//         bloodPressure: req.body.bp,
//         allergy: req.body.allergy,
//         disease: req.body.disease
        

//     });
//     newPatient.save();
//     res.redirect("/"); // To stay in the homepage after submitting the form
// });

// // Retriving all the Patient data from the Database
// app.get("/patientData", async(req, res) => {
//     const getAllPatient = await patient_model.find();
//     return res.json(getAllPatient);
// });

// // Displaying the Pie-Chart 
// app.get("/patientVisuals",function(req,res){
//     console.log("hello world");
//     res.sendFile(__dirname + '/public/chart.html');
// })

// // Listening requests on port 3000
// app.listen(3000, function(){
//     console.log("Server is running");
// })

console.log("Github actios is working")
