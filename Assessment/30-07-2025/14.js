// Question 14 : Code: Write a simple if-else statement that checks if a number is positive, negative, or zero.
// Answer : 

//prompt
import promptValue from 'prompt-sync';
let prompt = promptValue();

let num = prompt('Enter the number');

if(num > 0){
    console.log(`The number ${num} is positive.`);
}
else if(num === 0){
    console.log(`The number ${num} is Zero.`);
}
else{
    console.log(`The number ${num} is Negative.`);
}