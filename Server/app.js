const express = require('express');
let cors = require('cors');
let process = require('process');

const app = express();

app.use(cors());

app.get('/medals', (req, response) => {
    const data = require('./resources/medals.json');
    data.map(element => {
        element.total = element.gold + element.silver + element.bronze;
    });
    response.json(data); 
});

app.get('/medals/:code', function(req,res){
    const code = req.params['code'];
    const cwd = process.cwd();
    res.sendFile(cwd+"/resources/images/"+code+".png");
});


module.exports = app;