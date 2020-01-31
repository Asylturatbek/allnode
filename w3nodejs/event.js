var fs = require('fs');
var rs = fs.createReadStream('./demofile.txt');
rs.on('open', function() {
	console.log('The file is open')
})


var events = require('events');
var eventEmitter = new events.EventEmitter();

/**
 * event handler function
 * @return {[log type]} [logs a string]
 */
var myEventHandler = function() {
	console.log('I hear a scream!');
}

/**
 * Assigning the event handler to an event
 */
eventEmitter.on('scream', myEventHandler);

/**
 * Fire the 'scream' event
 */
eventEmitter.emit('scream');