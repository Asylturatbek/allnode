const express = require('express')
const app = express();
const bodyParser = require('body-parser')

var urlencodedParser = bodyParser.urlencoded({extended: false})

app.use(express.static('./public'))

app.get('/index.htm', function(req, res) {
	res.sendFile(__dirname + '/' +'index.htm')
})

app.post('/process_post', function(req, res) {
	console.log(req.query)
	response = {
		first_name: req.query.first_name,
		last_name: req.query.last_name
	}
	console.log(response)
	res.end(JSON.stringify(response))
})

const server = app.listen(5000, function () {
	const host = server.address().address
	const port = server.address().port

	console.log(`App is listening at http://${host}:${port}`)
})