const http = require('http')

const server = http.createServer(function(req, res) {
	console.log('Url stranitsy: '+ req.url)
	res.writeHead(200, {
		'Content-Type': 'text/plain ;charset=utf-8'
	})
	res.end('Privet mir')
})

server.listen(3000, '127.0.0.1');
console.log('My otslejivaem port 3000')
