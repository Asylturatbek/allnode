const people = [
	{ name: 'Vladilen', age: 24, budget: 300 },
	{ name: 'Max', age: 27, budget: 400 },
	{ name: 'Alan', age: 19, budget: 1200 },
	{ name: 'Sagyn', age: 30, budget: 1400 },
	{ name: 'Suvorov', age: 45, budget: 3000 }
] 


// forEach
// people.forEach(function(person, index, pArr) {
// 	console.log(person)
// 	console.log(index)
// })

// Map
// const newPeople = people.map(person => {
// 	return `${person.name} ${person.age}`
// })
// console.log(newPeople)

// Filter
 // const adults = people.filter(function (people) {
 // 	return people.age>25
 // })
 // console.log(adults)

// Reduce
const sum = people.reduce((total, person) => {
	return total+person.budget
},0)	
console.log(sum)

// Find
const igor = people.find(function(person) {
	return person.name ==='Vladilen'
})
console.log(igor)
// FindIndex

const igorIndex = people.findIndex(function(person) {
	return person.name ==='Vladilen'
})
console.log(igorIndex)
let arr = [1,2,3]
let arr1 = [1,2,3]
arr.forEach(function(item, index, array) {
	return item+=1
})
arr1.map((item, index, array) {
	
})
console.log(arr)
console.log(arr1)