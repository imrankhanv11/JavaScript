// number formating
let num = 3.14159;
console.log(num.toFixed(2)); 

let num2 = 3.14159;
console.log(num2.toPrecision(4)); 

let num3 = 12345;
console.log(num3.toExponential(2));

let price = 1234567.89;
let formatted = new Intl.NumberFormat('en-IN').format(price);
console.log(formatted); 

let rupees = 123456.78;
let inr = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR'
}).format(rupees);
console.log(inr); 

let rate = 0.875;
let percent = new Intl.NumberFormat('en-US', {
  style: 'percent',
  maximumFractionDigits: 1
}).format(rate);
console.log(percent);

// date formating
let date = new Date();
let formattedDate = new Intl.DateTimeFormat('en-IN', {
  day: '2-digit',
  month: 'long',
  year: 'numeric',
  weekday: 'long'
}).format(date);
console.log(formattedDate);