
const fetch = require('node-fetch');
console.log('Starting')

const delay = ms => {
	return new Promise(r => {
		setTimeout(() => {
			r()
		}, ms)
	})
}

url = 'https://jsonplaceholder.typicode.com/todos/1'

function fetchTodos() {
	console.log('Fetch to do is started')
	return delay(2000)
		.then(() => fetch(url))
		.then(response => response.json())

}

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))

// fetchTodos().then(data => {
// 	console.log('Data: ', data)
// })
// .catch(e => console.error(e))

async function fetchAsyncTodos() {
	console.log('Fetch to do is started')
	try {
		await delay(2000)
		const response = await fetch(url)
		const data = await response.json()
		console.log('Data: ', data)
	} catch (e) {
		console.error(e)
	} finally {
		return delay(1000)
		.then(() => {
			console.log('Fetching data is completed')
		})
	}
}

fetchAsyncTodos()