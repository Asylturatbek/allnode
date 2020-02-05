const path = require('path');

console.log('The name of the file: ', path.basename(__filename));

console.log('the name of directory: ', path.dirname(__filename));

console.log('rasshirenie: ', path.extname(__filename));

console.log('Parse: ', path.parse(__filename));

console.log(path.join(__dirname, 'server', 'index.html'));