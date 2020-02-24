const function array_counter(array) {
	console.log(`there is ${array.length} elements`)
}

const multiply(a, b) {
	console.log(`result is ${a*b}`)
}

const some_value = 456

module.exports = {
	array_counter: array_counter,
	multiply: multiply,
	some_value: some_value
}