const cors = require('cors');
const express = require('express');
// const cookieParser = require('cookie-parser')

const app = express();

var corsOptions = {
    origin: 'http://localhost:8080'
}

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the app'})
});

require('./app/routes/routes.js');

require('dotenv').config();
const PORT = process.env.PORT || 2220;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
 