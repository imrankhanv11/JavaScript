// capitalize first letter
const cap = "hello world from js";
let caparr = cap.split(' ');

for (let a = 0; a < caparr.length; a++) {
    caparr[a] = caparr[a].charAt(0).toUpperCase() + caparr[a].slice(1);
}

console.log(caparr);

// count vowels
const vow = "JavaScript is awesome";
let count = 0;
const vowels = "aeiouAEIOU";

for (let a = 0; a < vow.length; a++) {
    if (vowels.includes(vow.charAt(a))) {
        count++;
    }
}

console.log(count);

// filter prime number
let prime = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let filprime = prime.filter(x => {
    if (x <= 1) return false;
    for (let i = 2; i <= Math.sqrt(x); i++) {
        if (x % i === 0) return false;
    }
    return true;
});

console.log(filprime); 

// palindrome
let palin = "racecar";

let arrone = palin.split('');
let arrtwo = palin.split('').reverse();

let result = true;

for (let a = 0; a < arrone.length; a++) {
    if (arrone[a] !== arrtwo[a]) {
        result = false;
        break;
    }
}

console.log(result); 

// fibonacci using recurstion
function fibo(n){
    if(n === 1) return 1;
    if(n === 0) return 0;
    return fibo(n-1) + fibo(n-2);
}

function fiboseries(num){
    for(let i=0; i<num; i++){
        console.log(fibo(i));
    }
}

fiboseries(5);

// take and make even squre
let evensqure = [1, 2, 3, 4, 5];
let resultevsq = evensqure.filter(x => x % 2 === 0).map(x => x*x);
console.log(resultevsq);

// sum of digits in recursive
let resultsum = 0;

function sumOfDigits(value) {
    if (value === 0) return resultsum;
    let pair = value % 10;
    resultsum += pair;
    return sumOfDigits(Math.floor(value / 10));
}

console.log(sumOfDigits(1234)); 

// simpler way 
function sumOfDigits2(n) {
  if (n === 0) return 0;
  return (n % 10) + sumOfDigits2(Math.floor(n / 10));
}

console.log(sumOfDigits2(1234));

// reverse a number
let reversed = 0;

function reverseRecursive(n) {
    if (n === 0) return reversed;
    reversed = reversed * 10 + (n % 10);
    return reverseRecursive(Math.floor(n / 10));
}

console.log(reverseRecursive(1234));

// simpler way
function reverseNumber(n, rev = 0) {
    if (n === 0) return rev;
    return reverseNumber(Math.floor(n / 10), rev * 10 + (n % 10));
}

console.log(reverseNumber(1234)); 

// function returning a function
function matifactor(value){
    return function(num){
        return value * num;
    }
}

const container = matifactor(2);
console.log(container(5));

// higest occurance
let arrocc =[1, 3, 2, 1, 4, 1,4,2,4,3,5];
let clmap = new Map();

for(let a=0; a<arrocc.length; a++){
    if(clmap.has(arrocc[a])){
        clmap.set(arrocc[a], clmap.get(arrocc[a]) + 1);
    }
    else{
        clmap.set(arrocc[a],1);
    }
}

let maxKey = null;
let maxCount = 0;

for (let [key, value] of clmap.entries()) {
    if (value > maxCount) {
        maxCount = value;
        maxKey = key;
    }
}

console.log(`Highest occurring value: ${maxKey}`);
console.log(`Occurrence count: ${maxCount}`);
