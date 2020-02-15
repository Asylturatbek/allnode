

const delay = ms => {
	return new Promise(r => {
		setTimeout(() => {
			r()
		}, ms)
	})
}

url = 'https://jsonplaceholder.typicode.com/todos/1'

function fetchTodos() {
	delay(2000).then(() => {
		return fetch(url)
	}).then(reponse => response.json())
}