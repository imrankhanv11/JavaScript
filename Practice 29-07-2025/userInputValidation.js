import createPrompt from 'prompt-sync';
const prompt = createPrompt();

// -------------------------------------------------------
const nameRegex = /^[a-zA-Z]{2,}$/;

let name;

while (true) {
    name = prompt("Please enter your first name: ");

    if (nameRegex.test(name)) {
        break;
    } else {
        console.log("Invalid name. Please enter only letters (no numbers, symbols, or spaces).");
    }
}
// ------------------------------------------------------------
function isValidName(name) {
    return /^[A-Za-z\s]{2,}$/.test(name.trim());
}

let name2;

do {
    name2 = prompt('enter you name');
    if (!isValidName(name2)) {
        console.log("Invalid name. Try again:\n(only letters, min 2 chars)");
    }
} while (!isValidName(name2));


// ------------------------------------------------------------------
function isValidEmail(email) {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}



function isValidPassword(password) {

    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(password);

}


function isValidMobileNumber(number) {
    return /^[6-9]\d{9}$/.test(number.trim());
}

function isValidPinCode(pin) {
    return /^[1-9][0-9]{5}$/.test(pin.trim());
}



function isValidAge(age) {

    let num = Number(age);

    return !isNaN(num) && num >= 1 && num <= 120;

}


function isValidMarks(marks) {

    let num = Number(marks);

    return !isNaN(num) && num >= 0 && num <= 100;

}

function isValidNumber(val) {
    return !isNaN(val);
}


function isNotEmpty(str) {
    return str.trim().length > 0;
}



let email;

do {
  email = prompt("Enter your email: ");
  if (!isValidEmail(email)) {
    console.log("Invalid email. Please try again");
  }
} while (!isValidEmail(email));


let password;

do {
  password = prompt("Enter a strong password (min 8 chars, upper & lower case, digit, symbol): ");
  if (!isValidPassword(password)) {
    console.log("Invalid email. Please try again");
  }
} while (!isValidPassword(password));


let pinCode;

do {
  pinCode = prompt("Enter your 6-digit PIN code: ");
  if (!isValidPinCode(pinCode)) {
    console.log("Invalid email. Please try again");
  }
} while (!isValidPinCode(pinCode));
