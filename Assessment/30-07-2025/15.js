// Question 15 : Code: Create a switch statement that prints the day of the week based on a variable dayNumber (1–7).
// Answer :

//prompt
import promptValue from 'prompt-sync';
let prompt = promptValue();

let inputNum = prompt('Enter the number');


switch (inputNum) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Tursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Enter between 1 to 7");
}
