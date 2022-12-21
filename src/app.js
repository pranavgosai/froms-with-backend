const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");



require("./db/conn");
const Register = require("./models/registers");
const { create } = require("hbs");
const port = process.env.PORT || 3000;
const static_path = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.set("view engine","hbs");
app.set("views",template_path );
hbs.registerPartials(partials_path);

app.get("/",(req, res)=>{
res.render("index")
})
app.get("/register",(req,res)=>{
    res.render("register");
})
// create a new user in our database
app.post("/register",async(req,res)=>{
   try {
    const Password = req.body.Password;
    const cPassword = req.body.Password;
    if(Password===cPassword){
        const registerEmployee = new Register({
            name :req.body.name,
            Email:req.body.Email,
            Password:Password,
            PhoneNumber:req.body.PhoneNumber,
            Gender:req.body.body
        })
        
    const registerd = await registerEmployee.save();
    res.status(201).render(index);
    }else{
        res.send("passsword worg")
    }
   } catch (error) {
    res.status(400).send(error);
   }
})


app.listen(port,()=>{
    console.log(`server is runningat port no ${port}`);
})

