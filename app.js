var express = require('express');
var http = require('http');
var app = express();

var constants = require('./routes/constants');
var api = require('./routes/apis');
console.log("running in env : ", app.get('env'));
app.get('/', function(req, res) {
    console.log("get request received");
    res.send("hey there!")
});
app.post('/firt_api', api.firstApi);
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});

app.listen(process.env.PORT, function(){
    console.log('listening on port:', app.get('env'));
});

console.log("your app is started rakshit yadav v");
