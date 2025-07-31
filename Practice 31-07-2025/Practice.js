// Map.groupBy
let arr = [1,2,3,4,5,6,7,8,9,10];
let gp = Map.groupBy(arr, (x=> x%2=== 0 ? 'even' : 'odd'));

console.log(gp);

// arr
let arr1 = [2,3,4,3,23,4,55,44,345,3232,53,1];

// convert arr to set
let set1 = new Set(arr1);
console.log(set1);

console.log(arr1);

// set
let set2 = new Set();

// adding in set
set2.add(2);
set2.add(3);
set2.add(4);
set2.add(5);
set2.add(6);
set2.add(7);
set2.add(8);
set2.add(9);

// delete in set
set2.delete(3);

// check in set
console.log(set2.has(3));

// check and delete
if(set2.has(90)){
    console.log('...todeleteing');
    set2.delete(90);
}
else{
    console.log('not have this');
}

console.log(set2.size);
console.log('--------------------------');

set2.forEach(element => {
    console.log(element);
});

// convert to array
let arr2 = Array.from(set2);
console.log(`The 0th index of value is ${arr2[0]}`);

// arr sorting reverse
arr2.sort((a,b)=> b - a);
console.log(arr2);

// arr sorting normal 
arr2.sort((a,b) => a - b);
console.log(arr2);

// take copy and sort
let arr3 = arr2.toSorted((a,b) => b - a);

console.log('orignal arr :', arr2);
console.log('copy arr :', arr3);

arr3.push(9); //--->just add but not accept in set
console.log('copy arr :', arr3);


// copy arr to set
let set3 = new Set(arr3);
console.log(set3);

// iterate over set
let valueitrate1 = set3.values();
let valueitrate2 = set3.keys();
let valueitrate3 = set3.entries();

for(let val of valueitrate1){
    console.log(val);
}
console.log('-----------------------');

valueitrate2.forEach(element => {
    console.log(element);
});
console.log('-----------------------');

for(let [k,v] of valueitrate3){
    console.log(k);
}


set3.add(3);
let set4 = new Set([1,2,3,4,5,6,7,8,9,10,11]);
let set5 = new Set([3,4,5,6]);
let set6 = new Set([99,66,44,33]);

// union
console.log(set3.union(set4)); //---> matching onece in two set

// diffences
console.log(set3.difference(set4));
console.log(set4.difference(set3));

// intersection
console.log(set4.intersection(set5));

// subset
console.log(set5.isSubsetOf(set4));

// superset
console.log(set4.isSupersetOf(set5));

// disjoinform
console.log(set2.isDisjointFrom(set6));

// symetricDifference
console.log(set2.symmetricDifference(set3));
// ------------------------------------------


// map
let map1 = new Map([
    ['apple', 500],
    ['banana', 600],
    ['Orange', 200]
]);

console.log(map1);

// add in map
map1.set('Grapes', 300);
map1.set('waterMelon', 1000);
map1.set('WaterMelon2fake', 100);

console.log(map1);

// delete and has in map

if(map1.has('WaterMelon2fake')){
    map1.delete('WaterMelon2fake');
    console.log('deleted the fake one');
}
else{
    console.log('not deleted errr');
}

// keys values entries

let c1 = map1.keys();
let c2 = map1.values();
let c3 = map1.entries();

c1.forEach(element => {
    console.log(element);
});
console.log('----------------------');

for(let val of c2){
    console.log(val);
}
console.log('---------------------------');

for(let val of c3){
    console.log(val);
}
console.log('---------------------------');

for(let [k,v] of map1){
    console.log(`The key is ${k} and the value is ${v}`);
}
console.log('---------------------------');
console.log(`the size of map is ${map1.size}`);

// conversion
// to array
let arrmap = [...map1]; //-->arr
console.log(arrmap);

// map to obj
let objmap = Object.fromEntries(map1); //--obj

console.log(objmap);

// obj to map
let map2 = new Map(Object.entries(objmap)); //-->map
console.log(map2);

// obj to arr
let arrobj = Object.entries(objmap); //-->arr
console.log(arrobj);

// loop for obj
for(let val in objmap){
    console.log(val, objmap[val]);
}

let objvalues = Object.values(objmap);
console.log(objvalues);

let objkeys = Object.keys(objmap);
console.log(objkeys);

let objentries = Object.entries(objmap);
console.log(objentries);

console.log(typeof objentries);

// ------------------------------------

// other conversions

let stringname = 'Imran Khan';
let arrname =['i','m','u'];

// string to arr
let stgtoarr1 = [...stringname];
let strtoarr2 = Array.from(stringname);
let strtoarr3 = stringname.split('');

console.log(stgtoarr1,strtoarr2,strtoarr3);

// arr to string
let arrtostring = arrname.join('');
console.log(typeof arrtostring, arrtostring);

//----------------------------------------

// immedate call fn
(function(){
    console.log('Immediate call');
})();

