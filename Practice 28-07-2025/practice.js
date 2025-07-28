//display
console.log("hello world"); 

//calculate the date differance
let start = new Date("2025-07-01");
let end = new Date("2025-07-12");

let diff = end.getTime() - start.getTime();
let days = diff / (1000*60*60*24);

console.log(days);

//date somes
let date1 = new Date();
console.log(date1);

let date2 = new Date();
console.log(date2.getFullYear());

console.log(date2.getDate());

console.log(date2.getDay());

console.log(date2.getMonth());