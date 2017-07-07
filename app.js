
//express server

const express = require('express');
const app = express();
var html = 'scene.html';

app.get('/', function (req, res) {
	res.sendfile(html);
})

app.listen(3000, function() {
	console.log("Testing express app..");
})
