const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "192.168.0.147",
  user: "root",
  password: "root",
  database: "pulsedb", // Corrected the database name here
});

db.connect((err) => {
  if (err) console.log(err);
  console.log("Successfully connected to the database.");
});

module.exports = db; // Export using module.exports for CommonJS
