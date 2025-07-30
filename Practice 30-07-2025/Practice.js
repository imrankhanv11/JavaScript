const person = {
    name : 'John',
    age : 21,
    isStudent : true
}

console.log(person);

for(let val in person){
    console.log(`${val} : ${person[val]}`);
}

let string_person = JSON.stringify(person);
console.log(string_person);

console.log(typeof string_person);

const person2 = JSON.parse(string_person);

console.log(typeof person2);
console.log(person2);
// -----------------------------------------------------

const setvalue = new Set([1,2,3,4,5,4,3,4]);

setvalue.forEach(element => {
    console.log(element);
});

console.log('----');
for(let val of setvalue){
    console.log(val);
}

let arrayofset = [...setvalue];

arrayofset.sort((a,b)=> b - a);

console.log(arrayofset);

console.log(arrayofset[0]);

let maparray = arrayofset.map(x=> x*x);
console.log(maparray);

let filterarray = arrayofset.filter(x=> x%2===0);
console.log(filterarray);

let reducearray = arrayofset.reduce((a,b)=> a+b,0);
console.log(reducearray);

let reducearray2 = arrayofset.reduce((a,b)=> a*b,1);
console.log(reducearray2);

console.log('-----------------------------');
// ------------------------------------------------------

let datenow = new Date();
console.log(`Current date : ${datenow}`);

console.log(`current year : ${datenow.getFullYear()}`);

console.log(datenow.toLocaleString());
console.log(datenow.toLocaleDateString('en-In',{
    weekday:'long',
    year:'2-digit',
    month:'long',
    day:'2-digit',
    hour:'2-digit',
    minute:'2-digit'
}));
console.log(datenow.toLocaleTimeString())
console.log('----------------');
// -------------------------------------------

let rupees = 12336435353.4545;
console.log(`orignal rupees : ${rupees}`);

console.log(rupees.toLocaleString('en-In',{
    style:'currency',
    currency:'INR'
}));

console.log(rupees);

console.log(rupees.toLocaleString('en-In',{
    style:'percent',
    maximumFractionDigits: 2,
    maximumSignificantDigits: 4
}))

let newmethod =  new Intl.NumberFormat('en-In',{
    style:'unit',
    unit:'meter'
}).format(rupees);

console.log(newmethod);