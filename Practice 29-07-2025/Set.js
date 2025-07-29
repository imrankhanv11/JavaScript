//create set
let set1 = new Set([1,2,3,4]);
let set2 = new Set();

console.log(set1);
console.log(set2);

//adding in set
set2.add(2);
set2.add(3);
set2.add(4);
set2.add(5);
set2.add(6);
set2.add(2); //adding same vale but not add

console.log(set2);

//delete in set

set2.delete(4);
console.log(set2);


//check if set have that value
console.log(set1.has(3));

//clear
let set3 = new Set([3,4,5,6,4,3,5,6]);
console.log(set3);

set3.clear();
console.log('after clear');
console.log(set3);


//size
console.log('set size or length is :', set2.size);


console.log('---------------------');
//values and keys and entries

let values1 = set2.values();
let Keys1 = set2.keys();
let entries1 = set2.entries();

console.log(values1, Keys1, entries1);
console.log('---------------------');


//set logic methods
const A = new Set(['a','b','c']);
const B = new Set(['b','c','d']);

const C = A.union(B);
console.log(C);

const D = A.intersection(B);
console.log(D);

const E = A.difference(B);
console.log(E);

// const F = A.symetricDifference(B);
// console.log(F);

let G = A.isSubsetOf(B);
console.log(G);

let H = A.isSupersetOf(B);
console.log(H);

let I = A.isDisjointFrom(B);
console.log(I);