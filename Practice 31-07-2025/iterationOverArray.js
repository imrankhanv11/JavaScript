let greetings = [
    () => console.log("Hello"),
    () => console.log("Welcome"),
    () => console.log("Goodbye")
];

for (let greet of greetings) {
    greet(); 
}

// for loop
let colors = ['red', 'green', 'blue'];

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

// for..of
let fruits = ['apple', 'banana', 'mango'];

for (let fruit of fruits) {
    console.log(fruit);
}

// foreach()
let nums = [10, 20, 30];

nums.forEach((num, index) => {
    console.log(`Index ${index}: Value ${num}`);
});

// map
let numbers = [1, 2, 3];
let squares = numbers.map(num => num * num);
console.log(squares); 

// filter
let ages = [12, 25, 17, 30];
let adults = ages.filter(age => age >= 18);
console.log(adults); 

// reduce()
let prices = [100, 200, 300];
let total = prices.reduce((acc, val) => acc + val, 0);
console.log(total); 

// some
let hasAdult = [10, 20, 30].some(age => age >= 18);
console.log(hasAdult);

// every
let allAdults = [18, 20, 30].every(age => age >= 18);
console.log(allAdults);

//find
let found = [10, 20, 30].find(num => num > 15);
console.log(found);

//findindex
let index = [10, 20, 30].findIndex(num => num > 15);
console.log(index);

// for with index and vlaue
let arr = ['a', 'b', 'c'];
for (let [index, value] of arr.entries()) {
  console.log(index, value);
}


// reduce right
let nums2 = [1, 2, 3, 4];
let result2 = nums2.reduceRight((acc, val) => acc - val); 
console.log(result2); 


// flat
let arr5 = [1, 2, [3, 4], [5, [6]]];
console.log(arr5.flat());       
console.log(arr5.flat(2));      

// flat map
let arrr = [1, 2, 3];
let result11 = arrr.flatMap(x => [x, x * 2]);
console.log(result11); 