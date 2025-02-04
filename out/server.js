"use strict";
//If using mac make sure Icloud sync is off for easier git control
Object.defineProperty(exports, "__esModule", { value: true });
//Constant variables
const express = require("express");
const path = require("path");
const server = express();
const portnum = 8080;
server.use(express.static(path.join(__dirname, "../public")));
//Server web serving services
server.get("/", (req, res) => { });
server.listen(portnum, () => {
    console.log("Running on http://localhost:${portnum}");
});
