var request = require('request');
var Request = require('./lib/Request')(request);

var request = new Request({
  debug: true, // Optional, output delay to console
  delayMin: 1000,
  delayMax: 3000
});

console.log('Run first request');

request.run('http://www.google.com', function (err, response) {
  console.log('First request response received');
});

console.log('Run second request');

request.run('http://www.google.com', function (err, response) {
  console.log('Second request response received');
});
