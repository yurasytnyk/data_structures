// Set

const john = { name: 'John' };
const mary = { name: 'Mary' };
const duke = { name: 'Duke' };

const set = new Set([1, 2, 3, 'button']);
set.add(john);
set.add(mary);
set.add(duke);

// console.log(set.has(john));
set.delete(mary);
// console.log(set.has(mary));
// console.log('Button', set.has('button'));
// console.log(set);
// console.log('Size', set.size);
// set.clear();
// console.log('Size', set.size);

// for (let key of set) {
//     console.log(key);
// }

// console.log(set.keys());
// console.log(set.values());
// console.log(set.entries());

const arrFromSet = [...set];
const arrFromSet2 = Array.from(set);
// console.log(arrFromSet);
// console.log(arrFromSet2);

// Map

const map = new Map();
