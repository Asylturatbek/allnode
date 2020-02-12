function hello() {
	console.log('Hello', this)
}

const person = {
	name: 'Martin Iden',
	age: 21,
	sayHello: hello,
	sayHelloWindow: hello.bind(global),
	logInfo: function(job, phone) {
		console.group(`${this.name} info`)
		console.log(`Name is ${this.name}`)
		console.log(`Age is ${this.age}`)
		console.log(`Job is ${job}`)
		console.log(`Phone is ${phone}`)
		console.groupEnd()
	}

}

const lena = {
	name: 'Elena',
	age: 23
}

// hello();
// person.sayHelloWindow();
// person.sayHello();
// person.logInfo()

person.logInfo.bind(lena, 'Frontend', '090232381')()

// const LenaInfoLog = person.logInfo.bind()
// LenaInfoLog()
// 

person.logInfo.call(lena, 'Frontend', '090232381')

person.logInfo.apply(lena, ['Frontend', '92394100012'])

const array = [1,2,3,1,2]

// function multBy(arr, n) {
// 	return arr.map(function (i) {
// 		return i*n
// 	})
// }
// 

Array.prototype.multBy = function (n) {
	// console.log('multBy', this)
	return this.map(function (i) {
		return i * n
	})
}

console.log(array.multBy(2));