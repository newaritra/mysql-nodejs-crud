//plugins
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const { runQuery } = require("../adapter/index");

//middlewares
router.use(bodyParser.json());
router.use(bodyParser.urlencoded());

//api routes

router.post("/register", async (req, res) => {
  try {
    const { username, password, type } = req.body;
    await runQuery(
      `INSERT INTO Users (username,password,usertype) VALUES('${username}','${password}','${type}')`
    );
    res.json({ message: "User has been registered succesffully" });
  } catch (err) {
    console.log("Error while registering users", err);
  }
});
router.post("/login", async (req, res) => {
  // jwt.verify(token)
  const { username, password } = req.body;
  // console.log(req.headers.authorization);
  const payload = { username, password };
  const checkRegistered = await runQuery(
    `SELECT * FROM Users WHERE username=? AND password=?`,
    [username, password]
  );
  if (!checkRegistered.length)
    return res.json({ message: "Check your credentials please" });
  const token = jwt.sign(payload, "SECRET", { expiresIn: "30days" });
  res.json({ token });
});

module.exports = router;
