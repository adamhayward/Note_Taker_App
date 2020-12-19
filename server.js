// ==========================================================
// DEPENDENCIES LIST
// ==========================================================

var express = require("express");
var path = require("path");
var inquirer = require('inquirer');

// ==========================================================
// EXPRESS CONFIGURATION
// ==========================================================
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ==========================================================
// ROUTES
// ==========================================================
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
// ==========================================================
// LISTENER
// ==========================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
}); 

// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "./public/index.html"));
// });

// app.get("/notes", function(req, res) {
//     res.sendFile(path.join(__dirname, "./public/notes.html"));
// });
