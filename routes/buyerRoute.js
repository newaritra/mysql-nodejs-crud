//plugins
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const { runQuery } = require("../adapter/index");

//middlewares
router.use(bodyParser.json());
router.use(bodyParser.urlencoded());

//api routes

router.post("create-order/:seller_id", async (req, res) => {
  try {
    const seller_id = req.params.seller_id;
    const result = await runQuery(
      `SELECT id,product_name,price FROM Products WHERE seller_id='${seller_id}' AND ordered=0`
    );
  } catch (err) {
    console.log(err);
  }
});

router.get("/list-of-sellers", async (req, res) => {
  //gets list of sellers
  try {
    const result = await runQuery(
      `SELECT id,username FROM Users WHERE usertype='seller'`
    );
    res.json(result);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
});

//api for getting the catalog for a specific seller
router.get("/seller-catalog/:seller_id", async (req, res) => {
  try {
    const seller_id = req.params.seller_id;
    const result = await runQuery(
      `SELECT * FROM Products WHERE seller_id = ${seller_id}`
    );
    res.json(result);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
