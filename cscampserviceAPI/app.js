const express = require("express");
const bodyParser = require("body-parser");

var routes = require("./routes/index");
// var cors = require("cors");


const app = express();
const port = 8083;
app.use(bodyParser.json({ limit: "100mb" }));
// app.use(cors());
app.use("/", routes);



app.listen(port, () => console.log(`Example app listening on port ${port}!`));