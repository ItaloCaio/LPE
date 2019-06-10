module.exports = function(application){
	application.get('/', function(req, res){
		res.render('inicio');
	});
	application.get('/ajuda', function(req, res){
		res.render('ajuda');
	});
	application.get('/sobre', function(req, res){
		res.render('sobre');
	});
	application.get('/', function(req, res){
		res.render('sobre');
	});
	application.get('/', function(req, res){
		res.render('inicio');
	});
}