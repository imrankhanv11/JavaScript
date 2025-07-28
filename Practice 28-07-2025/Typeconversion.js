let combined1 = 100 + "50";       
console.log(combined1);

let combined2 = "100" - 50;      
console.log(combined2);

let combined3 = "10" * "2";     
console.log(combined3);

let combined4 = "20" / "4";      
console.log(combined4);

let value1 = true + 2;         
console.log(value1);

let value2 = false + 10;       
console.log(value2);

let value3 = "true" + true;     
console.log(value3);

let value4 = "10" + false;      
console.log(value4);

let value5 = 10 + null;       
console.log(value5);

let value6 = 10 + undefined;  
console.log(value6);



let str1 = "100";
let num1 = Number(str1);
console.log(num1);
console.log(typeof num1);

let str2 = "123.45";
let float1 = parseFloat(str2);
console.log(float1);

let int1 = parseInt("200.99");
console.log(int1);

let num2 = 456;
let str3 = String(num2);
console.log(str3);
console.log(typeof str3);

let bool1 = true;
let num3 = Number(bool1);
console.log(num3);

let bool2 = false;
let num4 = Number(bool2);
console.log(num4);

let num5 = 0;
let bool3 = Boolean(num5);
console.log(bool3);

let num6 = 1;
let bool4 = Boolean(num6);
console.log(bool4);

let str4 = "";
let bool5 = Boolean(str4);
console.log(bool5);

let str5 = "hello";
let bool6 = Boolean(str5);
console.log(bool6);

let val1 = null;
console.log(Number(val1));
console.log(Boolean(val1));
console.log(String(val1));

let val2;
console.log(Number(val2));
console.log(Boolean(val2));
console.log(String(val2));

let invalid = "abc";
let result = Number(invalid);
console.log(result);