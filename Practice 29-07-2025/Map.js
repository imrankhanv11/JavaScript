// create map
const map1 = new Map();

// add entries using correct syntax
map1.set(1, 'apple');
map1.set(2, 'Banana');
map1.set(3, 'Choclate');
map1.set(4, 'Orange');

// get values
let values1 = map1.values();

for (let val of values1) {
  console.log(val);
}

//get keys
let keys1 = map1.keys();
for (let k of keys1){
    console.log(k);
}

//check
console.log(map1.has(2));

//delete
console.log(map1.delete(1));

let values2 = map1.values();

for (let val of values2) {
  console.log(val);
}

//entries

let entries1 = map1.entries();

for(let val of entries1){
    console.log(val);
}

for(const [k,v] of map1){
    console.log(`${k} : ${v}`);
}


console.log(map1);
//clear
map1.clear();
console.log(map1);
