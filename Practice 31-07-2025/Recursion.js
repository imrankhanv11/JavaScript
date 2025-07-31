// basic 
function doSomething(n) {
  if(n === 0) {
    console.log("TASK COMPLETED!")
    return
  }
  console.log("I'm doing something.")
  doSomething(n - 1)
}
doSomething(3)

// factorial with loop
function findFactorial(num) {
  let factorial = 1;
  for (let i = num; i > 0; i--) {
    factorial *= i;
  }
  return factorial
}

const output1 =findFactorial(5);
console.log(output1);
// ------------------------------------------------------

// factorial with recursive
function findFactorial2(num) {
  if (num === 0) return 1;
  let factorial = num * findFactorial2(num - 1);
  return factorial;
}

const output2 =findFactorial2(5);
console.log(output2);

// fibonacci
function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

const output = fibonacci(6); 
console.log(output);

// fibonacci series
function fibonacci2(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fibonacci2(n - 1) + fibonacci2(n - 2);
}

function printFibonacciSeries(count) {
  for (let i = 0; i < count; i++) {
    console.log(fibonacci2(i));
  }
}

printFibonacciSeries(6);

// sum of digits
function sumOfDigits(n) {
  if (n === 0) return 0;
  return (n % 10) + sumOfDigits(Math.floor(n / 10));
}

// reverse a string
function reverseString(str) {
  if (str === "") return "";
  return reverseString(str.slice(1)) + str[0];
}

// palindrome check string
function isPalindrome(str) {
  if (str.length <= 1) return true;
  if (str[0] !== str[str.length - 1]) return false;
  return isPalindrome(str.slice(1, -1));
}