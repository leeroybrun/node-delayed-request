var Request = require('./lib/Request');

var request = new Request({
	debug: true, // Optional, output delay to console
	delayMin: 1000,
	delayMax: 3000
});

request.run('http://www.google.com', function(err, response) {
	console.error(err);
	console.log(response);
});

request.run('http://www.google.com', function(err, response) {
	console.error(err);
	console.log(response);
});