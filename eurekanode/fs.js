var fs = require('fs');

fs.writeFile('./hello.txt', 'How dumb are you?', function (err) {
	if (!err) {
		fs.readFile('./hello.txt', function(err, data) {
			if(!err) {
				console.log(data.toString());
			}
		})
	}
})

