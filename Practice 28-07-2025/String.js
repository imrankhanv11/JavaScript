let value1 = 'In Single Quotes';
console.log(value1);

const value2 = "In Double Quotes";
console.log(value2);

let value3 = `in Template string`;
console.log(value3)

console.log('the length is :'+ " "+ value3.length)

console.log('in upper case :'+" "+ value3.toUpperCase());

console.log('in lower case :'+" "+ 'HELLOW UPPER'.toLowerCase());

console.log(value2.charAt(1));

console.log(value2[3]);

const value4 = null;

console.log(value4);

console.log(typeof value4);

let value5 = '   hello   ';
console.log(value5.trim());

let value6 = "javascript";
console.log(value6.includes('java'));


console.log(value6.startsWith('j'));
console.log(value6.endsWith('z'));


let value7 = "Learning JavaScript is fun!";
console.log(value7.indexOf('JavaScript'));

console.log(value7.slice(9, 19));

console.log(value7.replace('fun', 'awesome'));

let value8 = "123";
let num = Number(value8);
console.log(num + 10);

let value9 = 100;
let str = String(value9);
console.log(str + " is a number");

let mix = "Hello" + 5 + 10;
console.log(mix);

let value10 = "abc";
console.log(value10.repeat(3));

let combined = value2.concat(" ", value3);
console.log(combined);

let splitTest = "a,b,c,d";
console.log(splitTest.split(','));

let empty = "";
console.log(Boolean(empty));

let notEmpty = "text";
console.log(Boolean(notEmpty));