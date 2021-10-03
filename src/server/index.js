//API key
// const api_key = process.env.API_KEY;
// const api_id = process.env.API_ID;

//require 

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser');
const cors = require('cors');

const fetch = require('node-fetch');
const dotenv = require('dotenv');
dotenv.config();

//app use

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

app.get('/', function (require, response) {
    // res.sendFile('dist/index.html')
    response.sendFile(path.resolve('src/client/views/index.html'))
})

app.get('/test', function (require, response) {
    response.send(mockAPIResponse)
})

// POST method route
app.post('/languageprocess', async (require, response) => {
    const url = require.body.data;
    // const keys = `${process.env.api_id}${process.env.api_key}&url=${txt}&lang=${lang}`;
    const keys = `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&text=${url}&lang=en`
   
    // const response = await fetch(keys);
    try {
        const data = response.json();
        console.log(data);
        response.send(data)
        return data;
    } catch (error) {
        console.log('error', error);
    }
})
