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



	application.get('/somar', function(req, res){
		res.render('somar');
	});
	application.get('/subtrair', function(req, res){
		res.render('subtrair');
	});
	application.get('/peppa', function(req, res){
		res.render('peppa');
	});
	application.get('/luna', function(req, res){
		res.render('luna');
	});
	application.get('/patrulha', function(req, res){
		res.render('patrulha');
	});



}