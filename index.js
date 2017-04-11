'use strict';

module.exports = (function () {
	var methods = {};

	methods.decode = methods.parse = require('./decode');
	methods.encode = methods.stringify = require('./encode');
	methods.escape = require('./escape');
	methods.unescape = require('./unescape');

	return methods;
}());

