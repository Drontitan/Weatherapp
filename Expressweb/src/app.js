const express =require("express");
const port =process.env.PORT||3000
const path=require("path")
const app=express();
const hbs = require("hbs");

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");
app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.get("/",(req,res)=>{
    res.render('index')
})
app.get("/about",(req,res)=>{
    res.render('about')
})
app.get("/weather",(req,res)=>{
    res.render('weather')
})
app.get("*",(req,res)=>{
    res.render("404eroor", {
      errorMsg: "Opps! page not found, Click Here to go",
    });
})

app.listen(port,()=>{
    console.log("server is running at 8000");
})