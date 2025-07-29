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
