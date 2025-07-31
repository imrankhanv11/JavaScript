//without parameter
const cl = () => console.log('Hello');
cl(); //---> Hello
console.log(cl()); //--->Hello & Undefined


// with parameter
const add = (a,b) => a+b;
console.log(add(10,2));

//shorter
const single1 = () => 'hii'; //---> it returns is default
console.log(single1());

//single parameter don't need ()
const singlePrameter = x => x*x;
console.log(singlePrameter(2));

//some more details
const details = (a,b) =>{
    let m = a+b;
    let n = a-b;
    let o = a*b;
    let result = (m + n + o)*2;
    console.log(result);
}

details(10,2);