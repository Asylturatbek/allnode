// const EventEmitter = require('events');

// const emitter = new EventEmitter();

// emitter.on('anything', (data) => {
// 	console.log('On: anything', data)
// })

// emitter.emit('anything', {a:1})
// emitter.emit('anything', {a:1})

// setTimeout(() => {
// 	emitter.emit('anything', {c:3})
// } , 1500)

// class Dispatcher extends EventEmitter {
// 	subscribe(eventName, cb) {
// 		console.log('[Subscribe...]')
// 		this.on(eventName, cb)
// 	}

// 	dispatch(eventName, data) {
// 		console.log('[Dispatching...]')
// 		this.emit(eventName, data)
// 	}
// }

// const dis = new Dispatcher()

// dis.subscribe('aa', data => {
// 	console.log('On: aa', data)
// })

// dis.dispatch('aa', {aa: 22})
// 
// 
// I am changing this in order to test 
// branching in git . So I am in the branch of testing 
// lets see what happens when I commit it in this branch
// 