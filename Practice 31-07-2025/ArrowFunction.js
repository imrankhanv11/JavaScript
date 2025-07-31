//without parameter
const cl = () => console.log('Hello');
cl(); //---> Hello
console.log(cl()); //--->Hello & Undefined


// with parameter
const add = (a,b) => a+b;
console.log(add(10,2));

//shorter
const single1 = () => 'hii'; //---> it returns is default
console.log(single1());

//single parameter don't need ()
const singlePrameter = x => x*x;
console.log(singlePrameter(2));

//some more details
const details = (a,b) =>{
    let m = a+b;
    let n = a-b;
    let o = a*b;
    let result = (m + n + o)*2;
    console.log(result);
}

details(10,2);

// with default parameter
const defaultparameter = (x,y,z=10) => x+y+z;
console.log(defaultparameter(10,10));

// arrow function with timeout
setTimeout(() => {
  console.log("Hello after 1 second");
}, 1000);

// arrow function with array methds
// map
let arr1 = [1, 2, 3, 4, 5];
let arr11 = arr1.map(x => x * 2);

arr11.forEach((el, ind) => {
    console.log(ind, el);
});

// filter
let arr2= [17,18,19,11,22,32];
let arr22 = arr2.filter(x=>x >= 18);

for(let val of arr22){
    console.log(val);
}

// reduce
let arr3 = [1,2,3,4,5];
let arr33 = arr3.reduce((a,b)=> a+b,0);

console.log('sum of arr is :',arr33);

// foreach loop
let arr4 = ['apple', 'orange', 'mango'];
arr4.forEach(element => { console.log(element.toUpperCase()) });

// chain method
const nums = [1, 2, 3, 4, 5, 6];

const result = nums
  .filter(n => n % 2 === 0)      // [2, 4, 6]
  .map(n => n * 2)               // [4, 8, 12]
  .reduce((a, b) => a + b, 0);   // 24

console.log(result); // 24

// with object array
const products = [
  { name: "Pen", price: 10 },
  { name: "Book", price: 50 },
  { name: "Bag", price: 100 }
];

const expensive = products.filter(p => p.price >= 50);

console.log(expensive);

