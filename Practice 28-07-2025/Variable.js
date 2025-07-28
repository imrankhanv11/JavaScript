//var, let, and const

//using var
var name = "Imran";
console.log("Name:", name);

// Re-declaration
var name = "Khan";
console.log("Updated Name:", name);

// Using let
let age = 21;
console.log("Age:", age);

// Re-assignment 
age = 26;
console.log("Updated Age :", age);

// Using const
const country = "India";
console.log("Country:", country);

//different types of variables
let isStudent = true;                         
let score = 89.5;                             
let hobbies = ["cricket", "reading"];         
let details = { firstName: "Imran", lastName: "Khan" }; 
let nothing = null;                       
let notDefined;                       

console.log("Is Student:", isStudent);
console.log("Score:", score);
console.log("Hobbies:", hobbies);
console.log("Details:", details);
console.log("Nothing:", nothing);
console.log("Not Defined:", notDefined);

{
    let city = "Chennai";    
    var state = "Tamil Nadu";
    console.log("Inside Block - City:", city);
    console.log("Inside Block - State:", state);
}

console.log("Outside Block - State:", state);

console.log("typeof name:", typeof name);             
console.log("typeof age:", typeof age);               
console.log("typeof isStudent:", typeof isStudent);   
console.log("typeof hobbies:", typeof hobbies);       
console.log("typeof details:", typeof details);      
console.log("typeof nothing:", typeof nothing);       
console.log("typeof notDefined:", typeof notDefined);  