// Question 19 : Code: Enhance the above program to display whether the user is eligible to vote (18+).
// Answer :

//prompt
import promptValue from 'prompt-sync';
let prompt = promptValue();


// function for validation
function formatcheck(Age) {
    return /^[0-1]?[0-9]-[0-3]?[0-9]-\d{4}$/.test(Age.trim());
}

//intialize for input form uer
let userAge;

do {
    userAge = prompt('Enter your Date of Birth (mm-dd-yyyy) :');
    if (!formatcheck(userAge)) {
        console.log('Invalid. Please Give in format of mm-dd-yyyy');
    }
} while (!formatcheck(userAge));

let output = AgeCalculation(userAge);


function AgeCalculation(Age) {
    let todayDate = new Date();
    let userDOB = new Date(Age);

    let FinalAge = todayDate.getFullYear() - userDOB.getFullYear();

    if (todayDate.getMonth() < userDOB.getMonth() ||
    (todayDate.getMonth() === userDOB.getMonth() && todayDate.getDate() < userDOB.getDate())) {
        FinalAge--;
    }
    return FinalAge;
}

if(output >= 18){
    console.log('Eligible to Vote');
}
else{
    console.log('Not Eligible to Vote');
}