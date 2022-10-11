const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));


mongoose.connect("mongodb+srv://shirish_35:shirish35@cluster0.bs1p3.mongodb.net/patient",{useNewUrlParser:true},{useUnifiedTopology:true});
// create a adata schema
const patientSchema = {
    fName: String,
    lName: String,
    eMail: String,
    mobile: Number,
    gender: String,
    age: Number,
    address: String,
    smoker: String,
    cOAlcohol: String,
    sugarLevel: Number,
    bloodPressure: Number,
    allergy: String,
    disease: String
    
}
const patient_model = mongoose.model("patient_details", patientSchema);


app.get('/', function(req, res) {
    console.log('Hello World');
    res.sendFile(__dirname + 'D:\practiceProjects\public/index.html');
});

app.post("/",function(req,res){
    let newPatient = new patient_model({
        fName: req.body.fName,
        lName: req.body.lName,
        eMail: req.body.eMail,
        mobile: req.body.mobile,
        gender: req.body.gender,
        age: req.body.age,
        address: req.body.address,
        smoker: req.body.smoker,
        cOAlcohol: req.body.alcohol,
        sugarLevel: req.body.sugar,
        bloodPressure: req.body.bp,
        allergy: req.body.allergy,
        disease: req.body.disease
        

    });
    newPatient.save();
    res.redirect("/");
});

app.get("/patientData", async(req, res) => {
    const getAllPatient = await patient_model.find();
    return res.json(getAllPatient);
});

app.get("/patientVisuals",function(req,res){
    console.log("hello world");
    res.sendFile(__dirname + '/public/chart.html');
})

app.listen(3000, function(){
    console.log("Server is running");
})

