//If using mac make sure Icloud sync is off for easier git control

import { Request } from "express";
import { Response } from "express";
//Constant variables
const express = require("express");
const path = require("path");
const server = express();
const PORT = 8080;

server.use(express.static(path.join(__dirname, "../public")));

//Server web serving services
server.get("/api/greeting", (req: Request, res: Response) => {
  res.json({ message: "Hello this is a routeing test" });
});

server.listen(PORT, () => {
  console.log("Running on http://localhost:" + PORT);
});
