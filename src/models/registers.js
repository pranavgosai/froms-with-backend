const mongoose = require("mongoose");
const employeeSchema = new mongoose.Schema({
    
Name:{
    type:String,
    require:true
},
Email:{
    type:String,
    require:true,
    unique:true
},
Password:{
    type:String,
    require:true
},
PhoneNumber:{
    type:Number,
    require:true,
    unique:true
},
Gender:{
    type:String,
    require:true
},


})




//now we need to create a collections//

const Register = new mongoose.model("Register",employeeSchema);
module.exports = Register;