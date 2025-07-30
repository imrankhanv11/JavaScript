// Question 13 : Code: Format today’s date to "DD-MM-YYYY" using JavaScript's Date object.
// Answer :

//today date
let todayDate = new Date();

//way one
let formatDate1 = new Intl.DateTimeFormat('en-In',{
    day:'2-digit',
    month:'2-digit',
    year:'numeric'
}).format(todayDate);

console.log(formatDate1);

// another way
let formatDate2 = todayDate.toLocaleDateString();
console.log(formatDate2);