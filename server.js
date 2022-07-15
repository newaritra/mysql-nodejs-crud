//plugins
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const buyerRouter = require("./routes/buyerRoute");
const { runQuery } = require("./adapter");

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use("/buyer", buyerRouter);

app.listen(6000, () => {
  console.log("Listening on 6000");
  //Initialize the databaase schema for runnning queries on
  runQuery("USE sys");
});
