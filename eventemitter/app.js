const EventEmitter = require('events');//it is a class
const emitter = new EventEmitter();

//register a listener
emitter.on('messageLogged', function(){
	console.log('Listener called')
})


// raise an event
emitter.emit('messageLogged')
