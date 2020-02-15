const person = new Object({
	name: 'Maxim', 
	age: 25,
	greet: function() {
		console.log('Greet!')
	}
})

Object.prototype.sayHello = function() {
	console.log('Hello!')
}

const lena = Object.create(person)
lena.name = 'Elena'

const str = new String('I am string')

console.log(lena)
console.log(lena.greet())
console.log(lena.sayHello())
console.log(lena.age)
console.log(lena.name)

console.log(str.bold())
console.log(str.length)
console.log(str)
console.log(str.sayHello())