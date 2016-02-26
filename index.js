var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
var fs = require('fs');
app.listen(4000, function(){
	console.log('Listening on 4000');
});
