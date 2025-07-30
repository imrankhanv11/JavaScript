// Question 1: MCQ: Which of the following is a correct variable declaration in JavaScript?
// Answer : c) let name = "John";

// Question 2: True/False: JavaScript is case-sensitive.
// Answer : True

// Question 3: Short Answer: What is the difference between let, var, and const?
// Answer: 
// This three all are used to declared a variable in JavaScript.
// var   : This is Function Scope variable in JavaScript.
//         This is older variable used in JavaScript.
//         We can Redeclared it.
//         We can update it.
// let   : This is Block Level Scope variable in JavaScript.
//         This used in modern JavaScript 2015.
//         We Can update it.
//         We can use same name outside the its block
// Const : This is Block Level Scope variable in JavaScript.
//         We can't Redeclared it.
//         We can't Update it.
//         If we don't need to change the value then we use const

// Questions 4: Short Answer: What is the difference between undefined and null?
// Answer : 
// Undefined : When declared a variable but we can't give value to it that show Undefined.
//             Example : let a; --> if check the typeOf a it show undefined.
// null      : Whe we declared with null this actually a not a empty but it can't have value.
//             Example : let b = null; the typeOf is null.

// Question 5: Short Answer: How do you convert a JavaScript object into a JSON string?
// Answer : Using JSON.stringify();
//          Example : let objString = JSON.stringify(Obj);


// Queston 6 : MCQ: Which of these is a falsy value in JavaScript?
// Answer : d) All of the above

// Question 7 : True/False: The == operator checks for both value and type equality.
// Answer : False

// Question 8 : Short Answer: How do you check if user input is not empty before processing it?	
// Answer : Using the methods of .length === 0 with .trim().
//          Using .trim() we can reduce the extra space before and after of word like "  hello  " --> "hello".
//          After .trim() we check the length of the string if it 0 the input is empty.
