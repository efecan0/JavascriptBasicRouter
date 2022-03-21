var express = require('express');
var app = express();
var morgan = require('morgan');

app.use(morgan('dev'));

app.get('*', (req,res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(7000, () => {
    console.log('Listening on port 7K');
});