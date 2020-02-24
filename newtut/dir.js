const fs = require('fs')

fs.unlink('./new-one/some_new.txt', function(err, data) {
	if (err) {
		console.log('there is no file')
	}
})

// fs.mkdir('new-one', function(err, dat) {
// 	if (err) {
// 		console.log('cannot create')
// 	}
// 	fs.writeFile('./new-one/some_new.txt', 'Privet mr', function() {
// 		console.log("everything is ok")
// 	})
// })

fs.rmdir('new-one', function(err, data) {

})