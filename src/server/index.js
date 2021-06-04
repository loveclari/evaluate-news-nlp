//API key
const dotenv = require('dotenv');
dotenv.config();
const api_key = process.env.API_KEY;
const api_id = process.env.API_ID;

//require 

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const fetch = require('node-fetch');

//const use

const app = express()
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(express.static('dist'))

// Create JS object
const appData = {}

console.log(__dirname)


// designates what port the app will listen to for incoming requests
const port = 8080;
const server = app.listen(port, function () {
    console.log(`Server running`);
    console.log(`running on localhost: ${port}`)
});

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// POST method route
app.post('/languageProcess', async (req, res) => {
    const keys = `${api_id}${api_key}&url=${txt}&lang=${lang}`;
    try {
        const response = await fetch(keys);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log('error', error);
    }

    res.send('POST received')
})
