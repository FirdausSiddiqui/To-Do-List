const express=require("express");
const bodyParser=require("body-parser");
const day=require(__dirname+"/dateModule.js");


const app=express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

var items=["buy food","cook food","eat food"];
var workItem=[];

app.get("/",function(req,res)
{
  res.render("list.ejs",{dayName:day.dayName(),newItem:items});
});

app.post("/",function(req,res){
  console.log(req.body);
  var item=req.body.itemName;
  if(req.body.button=="work")
  {
    workItem.push(item);
    res.redirect("/work");
  }else {
    items.push(item);
     res.redirect("/");
  }

});


app.get("/work",function(req,res)
{
  res.render("list.ejs",{dayName:"work",newItem:workItem});
});

app.get("/about",function(req,res)
{
  res.render("about.ejs");
});




app.listen(3000,function(){
  console.log("port is working on 3000");
});
