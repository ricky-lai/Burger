// Importing the needed node packages
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var app = express();

var PORT = process.env.PORT || 3000;

// Serving static content for the app from the "public" directory in the app directory
app.use(express.static(process.cwd() + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));

// Overriding with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Setting Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Importing routes and giving the server access to them
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(PORT, function () {
    console.log("Listening on PORT " + PORT);
});