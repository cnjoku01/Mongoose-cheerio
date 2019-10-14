//Set up node server and routs

// requires dependcies 
var express = require("express");
var mongoose = require("mongoose");
var exprsbar = require("express-handlebars");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 3001;

var app = express();

var router = express.Router();

require("../config/routes")(router);

app.use(express.static(__dirname + "/public"));

app.engine("handlebars", exprsbar({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(router);

var db = process.env.MONGODB || "mongodb://localhost/mongoHeadlines";

mongoose.connect(db, function(error){
    if (error) {
        console.log("error");
    }

    else {
        console.log("mongoose connection is successful")
    }
});

app.listen(PORT, function(){
    console.log("Listening on port:" + PORT);
});



