// Question 20 : Code: Ask the user for their name and greet them with 'Hello, [Name]!'
// Answer :

//prompt
import promptValue from 'prompt-sync';
let prompt = promptValue();

let UserName = prompt('Enter you Name :');
console.log(`Hello, ${UserName} Welcome!`);
