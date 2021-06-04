//API key
const dotenv = require('dotenv');
dotenv.config();
const api_key = process.env.API_KEY;

//require 

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const fetch = require('node-fetch');

const app = express()

app.use(express.static('dist'))

// Create JS object
const appData = {}

console.log(__dirname)


// designates what port the app will listen to for incoming requests
const port = 8080;
const server = app.listen(port, function () {
    console.log('Example app listening on port 8080!')
});

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// POST method route
app.post('/', function (req, res) {
    res.send('POST received')
  })
