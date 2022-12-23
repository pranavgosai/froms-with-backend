const mongoose = require("mongoose");
const validator = require("validator");



const userSchema = new mongoose.Schema({
    fname:{
        type:String,
    require:true,
    trim:true
    },
    lname:{
        type:String,
        require:true,
        trim:true
    },
    Email:{
        type:String,
    require:true,
    unique:true,
    validate(value){
     if(!validator.isEmail(value)){
        throw new  Error("invaild email")
     }
    } 
    },
 Mobile:{
    type:String,
        require:true,
        
 },
 Message:[]

})


//create model

const users = new mongoose.model("users",userSchema);

module.exports = users;