//If using mac make sure Icloud sync is off for easier git control

import { Request } from "express";
import { Response } from "express";
//Constant variables
const express = require("express");
const path = require("path");
const server = express();
const portnum = 8080;

server.use(express.static(path.join(__dirname, "../public")));

//Server web serving services
server.get("/", (req: Request, res: Response) => {});

server.listen(portnum, () => {
  console.log("Running on http://localhost:${portnum}");
});
