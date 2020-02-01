const exampleSet = new Set([1,2,3,1,2,2,7,7,]);

exampleSet.add(5);
exampleSet.add(4).add(17);

console.log(exampleSet.delete(2));

console.log(exampleSet.has(5));

console.log(exampleSet);
console.log(exampleSet.size);

console.log(exampleSet.clear());
console.log(exampleSet.size);
console.log(exampleSet)