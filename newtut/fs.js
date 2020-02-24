const fs = require('fs');

// const file_readed = fs.readFileSync('./text.txt', 'utf8')
// var message = 'privet mir \n' +file_readed
// fs.writeFileSync('some_new_file.txt', message)

fs.readFile('text.txt', 'utf8', function(err, data) {
	console.log(data);
})
console.log('Test')

fs.writeFile('some.txt', 'Hi, it is me \n and I am cool', function(err, data) {})