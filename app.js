//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
let items = [];
let workItem = [];
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("views"));

app.get("/", function(req, res){

    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    let day1 = today.toLocaleDateString("en-US",options);
    
    // var date = new Date();
    // var curr = date.getDay();
    // var day;
    
    // switch (curr) {
    //     case 0:
    //         day = "Sunday";
    //         break;
    //     case 1:
    //         day = "Monday";
    //         break;
    //     case 2:
    //         day = "Tuesday";
    //         break;
    //     case 3:
    //         day = "Wednesday";
    //         break;
    //     case 4:
    //         day ="Thursday";
    //         break;
    //     case 5:
    //         day ="Friday";
    //         break;
    //     case 6:
    //         day = "Saturday";
    //         break;
    //     // default:
    //     //     break;
    // }

    // res.render("list",{CurrDay: day});
    res.render("list",{listTitle: day1 , newList: items});
});

app.post("/",function(req, res){
    let item = req.body.newItem;
    console.log(item);
    items.push(item);
    res.redirect("/");
});

app.get("/work",function(req,res){
    res.render("list",{listTitle:"Work List" ,newList: workItem});
});
app.post("/work", function(req,res){
    let ite = req.body.newItem;
    workItem.push(ite);
    res.redirect("/work");
})

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});














