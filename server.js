const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser')

const app = express();

var corsOptions = {
  origin: "http://localhost:8080"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(
  cookieParser(),
  express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


require("./routes/routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});