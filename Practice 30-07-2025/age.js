import promptchat from 'prompt-sync';
let prompt = promptchat();

let Age;

do {
    Age = prompt('Enter your Dob :');
    if (!ageformat(Age)) {
        console.log('Give in format of mm-dd-yyyy');
    }
} while (!ageformat(Age));

function ageformat(Age) {
    return /^[0-1]?[0-2]-[0-3]?[0-9]-\d{4}$/.test(Age.trim());
}

let answer = agecalculation(Age);

if (isNaN(answer)) {
    console.log('Enter Valid dob');
}
else {
    console.log(`Your age is : ${answer}`);
}

function agecalculation(Age) {
    let today = new Date();
    let userDob = new Date(Age);

    let yearDiff = today.getFullYear() - userDob.getFullYear();

    if (today.getMonth() < userDob.getMonth() || (today.getMonth() === userDob.getMonth() && today.getDate() < userDob.getDate())) {
        yearDiff--;
    }
    return yearDiff;
}