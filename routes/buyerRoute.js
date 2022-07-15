//plugins
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const { runQuery } = require("../adapter/index");

//middlewares
router.use(bodyParser.json());
router.use(bodyParser.urlencoded());

//api routes

router.get("/get-sellers", async (req, res) => {
  //gets list of sellers
  try {
    const result = await runQuery(`SELECT * FROM Users`);
    res.json(result);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
