var express 			= require('express');
var app						= express();

var bodyParser		= require('body-parser')

var mongojs 			= require('mongojs');
var db 						= mongojs('catList', ['catList']);


app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/catList', function(req,res){
	console.log('i received a GET request')

	db.catList.find(function (err, docs){
			console.log(docs);
			res.json(docs)

	});
});

app.post('/catList', function(req, res){
	console.log(req.body);
	db.catList.insert(req.body, function(err, doc){
		console.log(doc)
		res.json(doc);
	})
});

app.delete('/catList/:id', function(req, res){
	var id = req.params.id;
	console.log(id);

	db.catList.remove({_id: mongojs.ObjectId(id)}, function(err, doc) {
		res.json(doc)
	});

});


app.listen(5000);
console.log('server running on port 5000');