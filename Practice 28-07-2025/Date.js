//calculate the date differance
let start = new Date("2025-07-01");
let end = new Date("2025-07-12");

let diff = end.getTime() - start.getTime();
let days = diff / (1000*60*60*24);

console.log(days);

//date somes
let date1 = new Date();
console.log(date1);

let date2 = new Date();
console.log(date2.getFullYear());

console.log(date2.getDate());

console.log(date2.getDay());

console.log(date2.getMonth());


let hours = date2.getHours();
let minutes = date2.getMinutes();
let seconds = date2.getSeconds();
console.log(hours);
console.log(minutes);
console.log(seconds);

let timestamp = date2.getTime();
console.log(timestamp);

let isoString = date2.toISOString();
console.log(isoString);

let localeDate = date2.toLocaleDateString();
let localeTime = date2.toLocaleTimeString();
console.log(localeDate);
console.log(localeTime);

let newDate = new Date("2025-12-31T23:59:59");
console.log(newDate.toString());

let updatedDate = new Date();
updatedDate.setFullYear(2030);
updatedDate.setMonth(0);
updatedDate.setDate(15);
console.log(updatedDate);

//object
let person = {
    firstname : 'hello',
    lastname  : 'world',
    age : 21,
    called : function(){
        console.log(this.firstname+" "+this.lastname);
    }
}

person.called();