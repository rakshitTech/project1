// process.env.NODE_CONFIG_DIR = "config/";
// var app_instance = process.argv.NODE_APP_INSTANE;
// process.argv.NODE_APP_INSTANE = "";
// config = require('config');
// process.argv.NODE_APP_INSTANCE = app_instance;
// require('pmx').init();
var express = require('express');
//
// var http = require('http');
var app = express();
//
// var constants = require('./routes/constants');
// console.log("port : ",config.get('PORT'));
// console.log(app.get('env'));
// console.log("in app.js");
//
// //app.set('port', process.env.PORT || config.get('PORT'));
app.get('/', function(req, res) {
    console.log("get request received");
    res.send("hey there!")
});
//
// app.use(function (req, res, next) {
//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     // Pass to next layer of middleware
//     next();
// });
//
// // function startInitialProcess() {
// //     console.log('Express server listening on port ' + app.get('port'));
// //     // db=''
// //     // var MongoClient = require('mongodb').MongoClient;
// //     // MongoClient.connect(config.get('databaseSettings.mongo_db_connection'), function (err, database) {
// //     //     if (err) throw err;
// //     //     db = database;
// //     // })
// // }
//
// // var startServer =  http.createServer(app).listen(app.get('port'), function () {
// //     startInitialProcess();
// // });



console.log("your app is started rakshit yadav v")