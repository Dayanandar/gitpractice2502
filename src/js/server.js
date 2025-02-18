const express = require("express");
const bodyParser = require("body-parser");
const Route = require("./Rout");
const Route1 = require("./Rout1");

var app = express();
app.use(bodyParser.json());
const cors = require("cors");
app.use(cors());
app.use("/st", Route);
app.use("/ct", Route1);
app.listen(3001, () => {
  console.log("server started");
});
