const events = require('events');

//our own event emitter
const myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', function(mssg){
	console.log(mssg)
})

myEmitter.emit('someEvent', 'the event was emitted')