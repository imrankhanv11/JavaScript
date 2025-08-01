// array
let arr = [1,23,4,5,6,4,7,8,6,5,4];

// add in start
arr.unshift(2);
console.log(arr);

// add in last
arr.push(1);
console.log(arr);

// remove in first
arr.shift();

// remove in last
arr.pop();
console.log(arr);

// add in specific place
arr.splice(2,0,2);
console.log(arr);

// remove in specific place
arr.splice(1,1);
console.log(arr);

// copy of an array
let arr2 = arr.slice(1,3);
console.log(arr2);

// copywithin
arr.copyWithin(0,4,5);
console.log(arr);

// make full copy of arr
let arr3 = [...arr];
console.log(arr3);

// searching
//includes
console.log(arr.includes(22));

// indexOf
console.log(arr.indexOf(5));

// lastIndexOf
console.log(arr.lastIndexOf(5));

// find
console.log(arr.find(x=> x % 2 === 0));

// findindexof
console.log(arr.findIndex(x=> x%2 === 0));

// findlast
console.log(arr.findLast(x => x%2 === 0));

// findlastindex
console.log(arr.findLastIndex(x => x%2 ===0));

// isArray
console.log(Array.isArray(arr));

// reversed without change original
console.log(arr.toReversed());

// shorted without change origianl
console.log(arr.toSorted((a,b)=> a - b));

console.log(arr);

// map
let arrmap = arr.map(x => x*x);
console.log(arrmap);

// filter
let arrfilter = arr.filter(x => x%2 === 0);
console.log(arrfilter);

// reduce
let arrreduce = arr.reduce((a,b) => a+b);
console.log(arrreduce);

// some
let arrsome = arr.some(x=> x*x === 8);
console.log(arrsome);

// every
let arrevery = arr.every(x=> x*1 === x);
console.log(arrevery);



const employees = [
  { name: "Sabari", salary: 25000 },
  { name: "Subha", salary: 30000 },
  { name: "Arun", salary: 28000 }
];

const updatedEmployees = employees.map(emp => {
  return {
    name: emp.name,
    salary: emp.salary + emp.salary * 0.10
  };
});

console.log(updatedEmployees);

// -------------------------------------
const data = [
  { name: "Arun", dept: "HR" },
  { name: "Subha", dept: "Tech" },
  { name: "Sabari", dept: "Tech" },
];

const grouped = Map.groupBy(data, item => item.dept);
console.log(grouped);

// ------------------------
const users = [
  { name: "Sabari", age: 22 },
  { name: "Subha", age: 21 },
  { name: "Vishnu", age: 23 }
];

users.forEach(element => {
    console.log(JSON.stringify(element));
});