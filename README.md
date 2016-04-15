delayed-request
===============

Simple module wrapping the "request" module to add some random delay between requests.

## Example

```javascript
var Request = require('delayed-request')(require('request'));

var request = new Request({
	debug: true, // Optional, output delay to console
	delayMin: 1000,
	delayMax: 3000
});

console.log('Run first request');

request.run('http://www.google.com', function(err, response) {
	console.log('First request response received');
});

console.log('Run second request');

request.run('http://www.google.com', function(err, response) {
	console.log('Second request response received');
});
```

## TODO

- Add a stack for requests to run, then launch them in order with delay between them

Licence
======================
(The MIT License)

Copyright (C) 2013 Leeroy Brun, www.leeroy.me

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
