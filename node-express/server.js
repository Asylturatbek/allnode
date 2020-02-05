const express = require("express");
const app = express();

app.get('/', (req, res) => {
	res.send('Hello World!!')
})

app.post('/', (req, res) => {
	res.send('Post(method) - Hello World')
})

app.listen('8080', ()=> {
	console.log('Server started ...')
});
