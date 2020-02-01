const _ = require('lodash');

const numbers = [22,31,52,12,3,21,5,45234];

_.each(numbers, function(number, i) {
	console.log(number);
});