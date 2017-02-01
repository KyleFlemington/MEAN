var express 			= require('express');
var app						= express();

var bodyParser		= require('body-parser')

var mongojs 			= require('mongojs');
var db 						= mongojs('catList', ['catList']);


app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.set('view engine', 'html');

app.listen(5000);
console.log('server running on port 5000');


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


app.get('/', function(req, res) {
		res.sendfile(__dirname + '/public/index.html');
})

app.get('/aboutUs', function(req, res){
	res.sendfile(__dirname + '/public/aboutUs.html')
});


app.get('/addCat', function(req, res){
	res.sendfile(__dirname + '/public/addCat.html')
});


app.get('/adopt', function(req, res){
	res.sendfile(__dirname + '/public/adopt.html')
});

app.get('/catcare', function(req, res){
	res.sendfile(__dirname + '/public/catcare.html')
});

app.get('/events', function(req, res){
	res.sendfile(__dirname + '/public/events.html')
});


app.get('/mewsletter', function(req, res){
	res.sendfile(__dirname + '/public/mewsletter.html')
});

app.get('/thankyou', function(req, res){
	res.sendfile(__dirname + '/public/thankyou.html')
});

app.get('/volunteer', function(req, res){
	res.sendfile(__dirname + '/public/volunteer.html')
});