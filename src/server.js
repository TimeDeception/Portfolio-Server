//If using mac make sure Icloud sync is off for easier git control
//Constant variables
var express = require("express");
var path = require("path");
var server = express();
var portnum = 8080;
server.use(express.static(path.join(__dirname, "public")));
//Server web serving services
server.get("/", function (req, res) {
    res.send;
});
server.listen(portnum, function () {
    console.log("Running on http://localhost:", portnum);
});
