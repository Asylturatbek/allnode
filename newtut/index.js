// console.log(__dirname)
// console.log(__filename)

const events = require('events')
const util = require('util')

const myEmit = new events.EventEmitter();

myEmit.on('some_event', function(text) {
	console.log(text)
})

myEmit.emit('some_event', "obrabotchik sobytyi srabotal")

const Cars = function(model) {
	this.model = model;
};

util.inherits(Cars, events.EventEmitter)

const bmw = new Cars('bmw')
const audi = new Cars('audi')
const volvo = new Cars('volvo')

var cars = [bmw, audi, volvo]
cars.forEach(function(car) {
	car.on('speed', function(text) {
		console.log(car.model + " speed is " +text)
	})
})
bmw.emit('speed', '245.5 km')