var _request = require('request');

var Request = function(options) {
	options = options || {};

	// Default values
	this._delayMin = options.delayMin || 1000;
	this._delayMax = options.delayMax || 3000;
    this._debug = options.debug || false;
	this._lastReqTime = 0;
};

Request.prototype._log = function(message) {
    if(this._debug) {
        console.log(message);
    }
};

Request.prototype.run = function(options, callback) {
	var _this = this;

	// Compute time from previous request & generate a random delay
    var timeSincePrevReq = new Date().getTime() - this._lastReqTime;
    var delay = this._randomDelay();

    // Send or delay the request if the delay since previous is too small
    if(timeSincePrevReq < delay) {
        var waitingTime = delay-timeSincePrevReq;

        _this._log('Wait '+ waitingTime +'ms before request.');

    	setTimeout(function() {
    		_this._execute(options, callback);
    	}, waitingTime);
    } else {
    	_this._execute(options, callback);
    }
};

Request.prototype._execute = function(options, callback) {
	_request(options, callback);
    this._lastReqTime = new Date().getTime();
};

Request.prototype._randomDelay = function() {
	return Math.floor(Math.random()*(this._delayMax-this._delayMin+1)+this._delayMin)
};

module.exports = Request;