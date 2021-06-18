
const express=require("express");
const bodyParser=require("body-parser");
const app=express();

app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.get("/bmicalculator",function(req,res){
  res.sendFile(__dirname + "/bmicalculator.html");
});

app.use(bodyParser.urlencoded({extended: true}));

app.post("/bmicalculator",function(req,res){
  var height=Number(req.body.height);
  var weight=Number(req.body.weight);
  var bmi=height/Math.pow(weight,2);
  res.send("BMI is "+bmi);
});

app.post("/",function(req,res){
  var num1=parseFloat(req.body.num1);
  var num2=parseFloat(req.body.num2);
  var result=num1+num2;
  res.send("The result of the calculation is "+result);
});

app.listen(3000,function(){
  console.log("Started server on port 3000");
});
