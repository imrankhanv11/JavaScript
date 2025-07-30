// Question 21:  Code: Ask the user to input a number and display whether it's even or odd.
// Answer :


//prompt
import promptValue from 'prompt-sync';
let prompt = promptValue();

//intialize the number to get input form user
let inputNum;

// do-while loop to get number from user if the enter NaN
do{
    inputNum = prompt("Enter number :");
    if(!numbervalidation(inputNum)){
        console.log("Invalid try agian.");
    }
}while(!numbervalidation(inputNum));

// to check input is a number
function numbervalidation(num){
    let numericvalue = Number(num);
    return !isNaN(numericvalue);
}

if(inputNum % 2 === 0){
    console.log(`The number ${inputNum} is Even`);
}
else{
    console.log(`The number ${inputNum} is Odd`);
}
