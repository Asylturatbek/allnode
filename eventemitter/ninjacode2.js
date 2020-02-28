const events = require('events')
const util = require('util');

const Person = function(name){
	this.name = name;
}
//we want to attach custom events to people
util.inherits(Person, events.EventEmitter);

let james = new Person('james');
let mary = new Person('mary')
let ryu = new Person('ryu')

let people = [james, mary, ryu];

people.forEach(function(person){
	person.on('speak', (mssg)=>{
		console.log(person.name + ' said: ' + mssg)
	})
})

james.emit('speak', 'hey dudes');
ryu.emit('speak', 'I want a curry')