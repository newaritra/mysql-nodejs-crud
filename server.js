//plugins
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const buyerRouter = require("./routes/buyerRoute");
const authRouter = require("./routes/authRoute");

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use("/api/buyer", buyerRouter);
app.use("/api/auth", authRouter);

app.listen(6000, () => {
  console.log("Listening on 6000");
});
