const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('this is the eventual value the promise will return');
  }, 300);
});

console.log(myPromise);

// build in promises
const anotherPromise = Promise.resolve("this is the eventual value the promise will return")

console.log(anotherPromise);

// with then()
const anotherPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('this is the eventual value the promise will return');
  }, 300);
});
anotherPromise2
.then(value => { console.log(value) })


// even check promises
let checkEven = new Promise((resolve, reject) => {
    let number = 4;
    if (number % 2 === 0) resolve("The number is even!");
    else reject("The number is odd!");
});
checkEven
    .then((message) => console.log(message)) // On success
    .catch((error) => console.error(error)); // On failure


// then()
Promise.resolve("Task done").then((value) => {
  console.log(value); 
});


// catch()
Promise.reject("Something went wrong").catch((error) => {
  console.log(error); // Output: Something went wrong
});

// finally()
Promise.resolve("Success")
  .then((data) => console.log(data))
  .catch((error) => console.log(error))
  .finally(() => console.log("Finished")); 


//   promisall()
Promise.all([Promise.resolve("A"), Promise.resolve("B")])
  .then((values) => console.log(values)); // Output: ["A", "B"]

//   promis.race()
Promise.race([
  new Promise(res => setTimeout(() => res("1st done"), 1000)),
  new Promise(res => setTimeout(() => res("2nd done"), 2000))
])
.then(result => console.log(result)); // Output: "1st done"

// promis.allsetter()
Promise.allSettled([
  Promise.resolve("Success"),
  Promise.reject("Fail")
])
.then(results => console.log(results));

// promis.any 
Promise.any([
  Promise.reject("Fail 1"),
  Promise.resolve("Success"),
  Promise.reject("Fail 2")
])
.then(result => console.log(result)); // Output: "Success"

// chining
Promise.resolve(5)
    .then((value) => value * 2) // Multiplies by 2
    .then((value) => value + 3) // Adds 3
    .then((finalValue) => console.log(finalValue)); // Logs: 13


// exmaple
const prm = new Promise(function(accept, reject){
    let hot = true;

    if(hot){
        accept('Pizza Accept');
    }
    else{
        reject('Pizza Reject');
    }
})

prm.then(value => console.log(value));
prm.catch(value => console.log(value));


// example
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) resolve("Data fetched successfully!");
      else reject("Error fetching data.");
    }, 1000);
  });
}

getData()
  .then(data => console.log(data))
  .catch(error => console.log(error));
