//named
const add = function sum(){
    console.log('named function expression');
}

//call
add();

//error
// sum(); --> can't use it only use inside the function for recursive purpose

// anonomys
const sub = function(a,b){
    console.log(a-b);
    console.log('annomys function');
}

sub(10,3);


//hoisted ---> declared and call only accept

// fullname('imran','khan'); //---> show error becuase of hoisted

const fullname = function(a,b){
    console.log(a, b);
}


fullname('imran','khan'); //---> it will run after declare we can call it

// /------------------------

//function expression return

const newone = function(a,b){
    return a-b;
}

let newtwo = newone(20,2);
console.log(`with return ${newtwo}`);


//--> run immediatly
(function() {
    console.log("I run instantly!");
})(); 


//function assiged to another variable
const sayHello = function(name) {
    console.log("Hello " + name);
};

const greetUser = sayHello; // copy function reference

greetUser("Imran"); 

// call back
function process(callback) {
    console.log("Processing...");
    callback(); // call the passed function
}

const done = function() {
    console.log("Callback completed!");
};

process(done);
console.log('---------------------');
// call back with parameter
function greetUser2(name, callback2) {
    console.log("Hello " + name);
    callback2();
}

const sayBye = function() {
    console.log("Goodbye!");
};

greetUser2("Imran", sayBye);


//clousure
function counter() {
    let count = 0;

    return function() {
        count++;
        console.log("Current count: " + count);
    };
}

const increase = counter(); 
increase(); // 1
increase(); // 2
increase(); // 3

counter(); //--not that
counter()(); //---> first() for return second() is call


//dynamic function
let operation = function(a, b) {
    return a + b;
};

console.log("Add: " + operation(5, 3));

operation = function(a, b) {
    return a * b;
};

console.log("Multiply: " + operation(5, 3));


//function expression inside the object
const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    }
};

console.log("Add: " + calculator.add(10, 5));
console.log("Subtract: " + calculator.subtract(10, 5));

// array
const operations = [
    function(a, b) { return a + b; },
    function(a, b) { return a - b; },
    function(a, b) { return a * b; }
];

console.log("Add: " + operations[0](4, 2));
console.log("Subtract: " + operations[1](4, 2));
console.log("Multiply: " + operations[2](4, 2));

console.log('---------------------');
//settimeout
console.log("Start");

setTimeout(function() {
    console.log("2 seconds later");
}, 2000);

console.log("End");