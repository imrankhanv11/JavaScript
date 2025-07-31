// take another function as input
function add(a,b){
    return a+b;
}

function main(a,b,add){
    let value1 = add(a,b);
    return value1;
}

const highvalue = main(10,5,add);
console.log(highvalue);

// return function
function createGreeter(greeting) {
  return function(name) {
    console.log(`${greeting}, ${name}!`);
  };
}

const greetHello = createGreeter("Hello");
greetHello("John");

const greetGoodbye = createGreeter("Goodbye");
greetGoodbye("Alice");

// another return function
function mainone(num){
    return function(num2){
        console.log(num+num2);
    }
}

const value11 = mainone(10);
value11(10);

const value22 = mainone(20);
value22(20);

// filter
function evenORodd(array, callback){
    return array.filter(callback);
}

let arrayone = [2,3,4,5,6,7,8,9];

let result = evenORodd(arrayone, x => x % 2 === 0);
console.log(result);

// function composition
function addd(x) {
    return x + 2;
}
function muld(x) {
    return x * 3;
}

function compose(f, g) {
    return function(x) {
        return f(g(x));
  };
}
var res = compose(addd, muld)(4);
console.log(res);

// currying
function mul(x) {
    return function(y) {
        return x * y;
  };
}
var mulFn = mul(2);
console.log(mulFn(5));