
//express server

const express = require('express');
const app = express();
var html = 'scene.html';

app.get('/', function (req, res) {
	res.sendfile(html);
})

app.use('/scripts', express.static(__dirname + '/scripts'));

app.listen(3000, function() {
	console.log("Testing express app.. on localhost:3000s");
})
