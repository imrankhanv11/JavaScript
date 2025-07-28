let num1 = 6;

for (let i = 0; i <= num1; i++) {
    console.log(i);
}

console.log('----------------------');

let array = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

let num2 = 5;
console.log(num2 + '11');

console.log(num2 - '1');

console.log('----------------------');
let a = 10;
let b = 3;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

console.log('----------------------');
let x = 10.5;
let y = 2.25;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);

console.log('----------------------');
let result = 7.5 * 2 - 1.5;
console.log(result);

let float1 = 0.1;
let float2 = 0.2;
let sum = float1 + float2;
console.log(sum);

console.log('----------------------');
console.log(sum.toFixed(2));

console.log('----------------------');
let value1 = Number("50");
let value2 = parseFloat("3.14159");
let value3 = parseInt("200.99");
console.log(value1);
console.log(value2);
console.log(value3);

console.log(typeof value1);
console.log(typeof value2);
console.log(typeof value3);

let big1 = 9007199254740991n;
let big2 = 1000000000000000n;
let bigSum = big1 + big2;
let bigMul = big1 * 2n;
console.log(bigSum);
console.log(bigMul);

console.log(typeof big1);

let numToStr = String(123.456);
console.log(numToStr);
console.log(typeof numToStr);

let strToNum = Number("1234.56");
console.log(strToNum);
console.log(typeof strToNum);

let boolToNum = Number(true);
console.log(boolToNum);

let invalid = Number("abc");
console.log(invalid);

let mixed = 100 + "200";
console.log(mixed);

let calc = 100 - "50";
console.log(calc);

let isInteger = Number.isInteger(55);
let isFloat = Number.isFinite(55.75);
console.log(isInteger);
console.log(isFloat);