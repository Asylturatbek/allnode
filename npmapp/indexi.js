let { Animal, Cat } = require('./animal.js')
// let Animal = anms.Animal;
// let Cat = anms.Cat;

let cat = new Cat('Cat', 4);

cat.makeNoise();
console.log(cat.metaData)