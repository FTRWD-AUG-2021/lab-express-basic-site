const chalk = require('chalk') 
const http = require('http');
const express = require('express');

const app = express();

app.use(express.static('public'));

// app.get('/favoriteHoliday', (req, res) => {
//     res.json([{ name: 'Haloween' }, { name: "Christams" }])
// })

// app.get('/cat', (request, response, next) => {
//     response.sendFile(__dirname + '/views/cat-page.html');
// });

app.get('/home', (request, response, next) => {
    response.sendFile(__dirname + '/views/home.html');
});


app.listen(process.env.PORT || 5000, () => console.log('My first app listening on port 5000! '));