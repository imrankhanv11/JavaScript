// Question 22 : Code: Create a small interactive script that:
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

if(output <= 19){
    console.log('user is Teenager');
}
else if(output > 19 && output <= 40){
    console.log('user is adult')
}
else if(output > 40){
    console.log('user is Senior citizen');
}