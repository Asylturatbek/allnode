class Animal {
	constructor(type, legs){
		this.type = type;
		this.legs = legs;
	}

	makeNoise(sound = 'Loud Noise') {
		console.log(sound);
	}

	get metaData() {
		return `Type: ${this.type}, Legs: ${this.legs}`;
	}

	/**eturn value without instanciating
	 * @return {[type]} [description]
	 */
	static return10() {
		return 10;
	}
}

class Cat extends Animal {
	// constructor(type, legs, trail){
	// 	super(type, legs);
	// 	this.tail = tail;
	// }
	makeNoise(sound = 'meow') {
		console.log(sound);
	}
}

// module.exports.Animal = Animal;
// module.exports.Cat = Cat;

module.exports = { Animal, Cat};