"use strict";

var express = require("express"),
    morgan = require("morgan");

var app = express(),
    port = process.argv[2] || process.env.PORT || 80;

app.use(morgan("dev"));

app.get("*", function (req, res) {
    res.end("Thanks from ES2015 js syntax!");
});

app.listen(port);
console.log("Listening on port " + port + "...");