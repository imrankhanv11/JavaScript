// Question 16 : Code: Write a simple form input validation snippet that ensures a username is at least 4 characters long.
// Answer : 

//prompt
import promptValue from 'prompt-sync';
let prompt = promptValue();

let username = prompt('Enter the username');


if(username.trim().length >= 4){
    console.log("Valid username");
}
else{
    console.log("Invlaid. Less then 4 char");
}



// using this can also we do
// call it in if condition
function ValidName(name) {
    return /^[A-Za-z\s]{4,}$/.test(name.trim());
}
