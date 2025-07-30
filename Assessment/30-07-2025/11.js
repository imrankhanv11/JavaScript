// Question 11 : Code: Convert the following object to JSON and then parse it back to an object.
// Answer :

const student = { 
    name  : "Tom",
    age   : 21
};

//convert into json
let studentJson = JSON.stringify(student);
console.log(`The string format : ${studentJson}`);
console.log(`The type of studentJason is : ${typeof studentJson}`);

//convert into back object
let studentObject = JSON.parse(studentJson);
console.log(`The object format : ${studentObject}`);
console.log(`The type of StudentObject is: ${typeof studentObject}`);