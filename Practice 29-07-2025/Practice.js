{
  let stringvalue = 'happy world';
  console.log(stringvalue.charAt(3));
  console.log(stringvalue.charCodeAt(3));
  console.log(stringvalue.codePointAt(3));
}

let marks = 75;
if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else {
  console.log("Grade C");
}

let day = "Wednesday";

switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Wednesday":
    console.log("Midweek");
    break;
  case "Friday":
    console.log("Weekend is near");
    break;
  default:
    console.log("Just another day");
}

//------------------------------------------------------------------

let price = 150000.20;
let rupees = new Intl.NumberFormat('en-In', {
  style: "currency",
  currency: 'INR',
  maximumFractionDigits: 0
}).format(price);

console.log(rupees);

//----------------------------------------------------------------------
let now = new Date();

let datenow = new Intl.DateTimeFormat('en-In', {
  month: 'long',
  day: '2-digit',
  weekday: 'long',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: true
}).format(now);

console.log(datenow);
//----------------------------------------------------------------------

let value11 = 0.936;

let percentage = new Intl.NumberFormat('en-In',{
  style:'percent',
  maximumFractionDigits:'0'
}).format(value11);

console.log(percentage);
//----------------------------------------------------------------------

let value22 = 25;

let un = new Intl.NumberFormat('en-In',{
  style:'unit',
  unit:'meter'
}).format(value22);

console.log(un);