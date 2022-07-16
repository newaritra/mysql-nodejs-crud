const MySQL = require("mysql2");

const Pool = MySQL.createPool({
  host: "localhost",
  user: "root",
  password: "Aritraroy18@",
  database: "sys", //schema name is added
  //   waitForConnections: true,
  //   charset: "utf8mb4",
});

module.exports = Pool;
