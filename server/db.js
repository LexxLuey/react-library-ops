/* const Pool = require("pg").Pool;

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "kthl8822",
  port: 5432,
  database: "authtodolist"
});

module.exports = pool; */

  
const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  user: "root",
  password: "",
  host: "localhost",
  port: 3308,
  database: "wakanda"
});

module.exports = pool;