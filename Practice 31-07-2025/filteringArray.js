const arr1 = [2,3,4,3,5,33,554,3,33,222,5,33,2,4];
const arr2 = [44,5,4,344,55,33,55,33,66,554,4,1,2];
const arr3 = [67,55,88,3,4,6,8,77,99,1,3,12,15,54,3];
const arr4 = [55,8,7,666,88888,7678,66,544,1,2,3,4,5,5];
const flatarr = [1,2,[3,4],[4,3,[5,5]],4,[3,[4,[6]]]];

// foreach
arr1.forEach((element, index) => {
    console.log(`index is ${index} and element is ${element}`);
});

// map
let arr5 = arr1.map(x=> x-1);
console.log(`mapped arr is ${arr5}`);

// filter
let arr6 = arr2.filter(x=> x%2 ===0);
console.log(`filtered array is ${arr6}`);

// reduce
let arr7 = arr4.reduce((a,b)=> a-b);
console.log(arr7);

// reduce right
let arr8 = arr4.reduceRight((a,b)=> a-b);
console.log(arr8);

// flat
console.log(flatarr);

let arr9 = flatarr.flat(1);
console.log(arr9);

let arr10 = flatarr.flat(4);
console.log(arr10);

// flat map
let arr11 = arr1.flatMap(x=>[x,x+1,x+2]);
console.log(arr11);

// every
let arr12 = arr1.every(x=>x%2 == 0);
console.log(arr12);

// some
let arr13 = arr1.some(x => x% 2 == 0);
console.log(arr13);

// find
let arr14 = arr1.find(x=> x%2==0);
console.log(arr14);

// findindex
let arr15 = arr1.findIndex(x=> x%2==0);
console.log(arr15);

// findlast
let arr16 = arr1.findLast(x=> x%2 == 0);
console.log(arr16);

// findlastindex
let arr17 = arr1.findLastIndex(x=> x%2 == 0);
console.log(arr17);

// includes
let arr18 = arr4.includes(44);
console.log(arr18);

let arr19 = arr4.includes(7);
console.log(arr19);

// indexof
let arr20 = arr1.indexOf(2);
console.log(arr20);

// indexoflast 
let arr21 = arr1.lastIndexOf(2);
console.log(arr21);

// is array
let arr22 = Array.isArray(arr21);
console.log(arr22);

// concat
let arr23 = arr1.concat(arr2);
console.log(arr23);

// anotherway
let arr24 = [...arr1,...arr2];
console.log(arr24);

// at
let arr25 = arr1.at(-1);
console.log(arr25);

// joins
let arr26 = arr1.join('-');
console.log(arr26);