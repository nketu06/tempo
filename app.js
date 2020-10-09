// using express modules
const express = require("express");
const app =express();
app.use(express.static("./public"));

// using body-parser module
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

// using ejs
const ejs =require("ejs");
app.set('view engine','ejs');

// using mongoose

const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/blogDB", {useNewUrlParser: true,useUnifiedTopology: true });

const newsSchema={
  title:String,
  content:String
};
const News=mongoose.model("News",newsSchema);




app.get("/",function(req,res){
res.render("index")
})

app.get("/compose",function(req,res){
  res.render("newsCompose")
})

app.post("/compose",function(req,res){
  console.log(req.body);
})






app.listen(3000,function(){
  console.log("server is running at 3000");
})
