//function
function consleprint(){
    console.log("without parameter");
}

consleprint();

function add(a,b){
    console.log(`with parameter add : ${a+b}`);
}

add(10,5);

//hoisted
Sub(10,2);

function Sub(a,b){
    console.log(a-b);
}

//calling with wrong parameter
console.log('calling function with wrong parameter');
Sub(); //---> show NaN

//calling without () show the details
console.log('calling without ()');
let fakecall = Sub;
console.log(fakecall);


//--> function return

function addition (a,b){
    return a+b;
}

let add2 = addition(10,10);
console.log(add2);

//direct call
console.log(addition(20,20));

//iner functions
function outer(name){
    let value = name;

    inner(value);

    function inner(value){
        console.log(`the name is ${value}`);
    }
}

outer('imran');

//function call another function
function one(){
    three();
}

function three(){
    console.log('another function');
}

one();


//defalut parameter
function defaultparameter(x,y,z=10){
    return x+y+z;
}

console.log(defaultparameter(10,10));