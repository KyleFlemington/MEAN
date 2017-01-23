var express 			= require('express');
var app						= express();

var mongojs 			= require('mongojs');
var db 						= mongojs('catList', ['catList']);


app.use(express.static(__dirname + '/public'));

app.get('/catList', function(req,res){
	console.log('i received a GET request')

	db.catList.find(function (err, docs){
			console.log(docs);
			res.json(docs)

	});
});


app.listen(5000);
console.log('server running on port 5000');