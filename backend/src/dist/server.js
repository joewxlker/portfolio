"use strict";
exports.__esModule = true;
var email_1 = require("../../Emails/email");
var express = require("express");
var http = require('http');
var app = express();
var PORT = process.env.PORT || 5000;
var bodyParser = require("body-parser");
var server = http.createServer(app);
var cors = require('cors');
app.use(cors({
    origin: "*"
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
server.listen(PORT, function () {
    console.log("Listening on port ".concat(PORT));
});
app.post('/api/email', function (req, res) {
    console.log(req.body);
    (0, email_1.sendEmail)(req.body);
    res.send(true);
});
