console.log('Okay starting')
class Animal {

	static type = 'ANIMAL'

	constructor(options) {
		this.name = options.name
		this.age = options.age
		this.hasTail = options.hasTail
	}

	voice() {
		console.log('I am Animal!')
	}
}


const animal = new Animal ({
	name: 'Animal',
	age: 5,
	hasTail: true
})

class Cat extends Animal {
	static type = 'CAT'

	constructor(options) {
		super(options)
		this.color = options.color
	}

	voice() {
		super.voice()
		console.log('I am cat')
	}

	get ageInfo() {
		return this.age * 7
	}

	set ageInfo(newAge) {
		this.age = newAge
	}
}

const cat = new Cat({
	name: 'Cat',
	age: 7,
	hasTail: true,
	color: 'black'
})

console.log(animal)
animal.voice()
console.log(Animal.type)

console.log(cat)
cat.voice()
console.log(cat.ageInfo)
cat.ageInfo = 8
console.log(cat.ageInfo)



class Component {
	constructor(selector) {
		this.$el = document.querySelector(selector)
	}
}