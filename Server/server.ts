//If using mac make sure Icloud sync is off for easier git control
//Constant variables
const express = require("express");
const path = require("path");
const server = express();
const portnum = 8080;

server.use(express.static(path.join(__dirname, "public")));

//Server web serving services
server.get("/", (req, res) => {
  res.send;
});

server.listen(portnum, () => {
  console.log("Running on http://localhost:", portnum);
});
