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

const map1 = new Map([
    ['one', '1'],
    [2, 'two'],
    [{ name: 'John' }, 'three']
]);

// console.log(map1);

const map2 = new Map();
map2.set('entry', 'one');
// console.log(map2.get('entry'));
map2.set('entry2', 'two');
// console.log(map2.has('entry2'));

// for (let value of map2.values()) {
//     console.log(value);
// }

// for (let key of map2.keys()) {
//     console.log(key);
// }

// for (let entry of map2.entries()) {
//     console.log(entry);
// }

console.log(map2.size);

const objFromMap2 = Object.fromEntries(map2.entries());

console.log(objFromMap2);