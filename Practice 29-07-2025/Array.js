// Creating array
const arr1 = [];

const arr2 = new Array();

//Insert

//at start
arr1.unshift('apple');
arr1.unshift('banana');

//at end 
arr1.push('lastone');
arr1.push('lasttwo');

//at specfic specific position
arr1.splice(2,0,'middle');

//----------------------------
arr1.forEach(element => {
    console.log(element);
});
//----------------------------

console.log('------------------------------');
//Remove

//at start
arr1.shift();

//at end
arr1.pop();

//at specific position
arr1.splice(1,1);


//----------------------------
arr1.forEach(element => {
    console.log(element);
});
//----------------------------


console.log('------------------------------');

//copy the part of value
let arr3 = arr1.slice(0,2);

//----------------------------
console.log('copied arrary 3');
arr3.forEach(element => {
    console.log(element);
});
//----------------------------

console.log('------------------------------');
console.log('------------------------------');

//searching

const arr4 = ['one','two','three','four','five','six','seven','eight','nine','ten','seven'];

//find index of value
console.log(arr4.indexOf('seven'));

//fid last index vale
console.log(arr4.lastIndexOf());
console.log(arr4.lastIndexOf('one'));

//find lenth
console.log(arr4.length);

//check existance
console.log(arr4.includes('eleven'));
console.log(arr4.includes('ten'));

//find first match
let value = arr4.find(x=> x=='one');
console.log(value);

//find first match index
let value2 = arr4.findIndex(x=> x=='seven');
console.log(value2);

console.log('------------------------------');
console.log('------------------------------');


//iteration and transformation

const arr5 =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];


//print
arr5.forEach(x=> console.log(x));

//transform
console.log(arr5.map(x=> x*2));

//filter
console.log(arr5.filter(x=> x > 10));

//reduce
console.log(arr5.reduce((a,b)=> a+b,0));

//every - check if all match
console.log(arr5.every(x=> x / 1 == x));

//some - check any one match
console.log(arr5.some(x=> x%10 == 0));

console.log('------------------------------');
console.log('------------------------------');

//sorting and reverse

const arr6 = [1,66,333,77,21,7,2];

console.log(arr6.sort());
console.log(arr6.sort((a, b) => a - b));

console.log('------------------------------');
console.log(arr6.reverse());


console.log('------------------------------');
console.log('------------------------------');

//joins and converstion
console.log(arr6.join('-'));

console.log(arr6.toString());

//flatten
let arr7 = [1,2,3,[2,4[3]]];

console.log(arr7.flat());
console.log(arr7.flat(5));

//fill
let arr8 = new Array(3).fill('apple');
console.log(arr8);

//spread
let arr9 = [...arr8,'banana'];
console.log(arr9);

//concat
let arr10 = arr1.concat(arr2,arr9);
console.log(arr10);