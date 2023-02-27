require('dotenv').config();
const mysql  = require('mysql');
// Create connection variable
const connection = mysql.createConnection({
    host: process.env.dbHost,
    user: process.env.dbUser,
    password: process.env.dbPassword,
    port: process.env.dbPort,
    database: process.env.database,
    multipleStatements: true
});

connection.connect((error) => {
    if(err) throw error;
    console.log('Successfully connected to the database.')
});

module.exports = connection;
