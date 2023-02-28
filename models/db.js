const mysql = require("mysql");
const database = require("../config/database.js");

// Create a connection to the database
const connection = mysql.createConnection({
  host: database.HOST,
  user: database.USER,
  password: database.PASSWORD,
  database: database.DATABASE,
  port: database.PORT
});

// open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = connection;