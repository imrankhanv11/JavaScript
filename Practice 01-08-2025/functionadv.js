// call()
const person ={
    fullname: function(){
        console.log( this.firstname+" "+this.lastname);
    }
}

const person1 ={
    firstname : 'imran',
    lastname  : 'khan'
}

const person2 = {
    firstname : 'imu',
    lastname : '11'
}

person.fullname.call(person1);
person.fullname.call(person2);

// call() with arguments
const personq = {
  fullName: function(city, country) {
    console.log( this.firstName + " " + this.lastName + "," + city + "," + country);
  }
}

const personq1 = {
  firstName:"John",
  lastName: "Doe"
}

personq.fullName.call(personq1, "Oslo", "Norway");

// apply()
const personap = {
  fullName: function() {
    console.log(this.firstName + " " + this.lastName);
  }
}

const personap1 = {
  firstName: "Mary",
  lastName: "Doe"
}

personap.fullName.apply(personap1);

// apply() with arguments
const personar = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const personar1 = {
  firstName:"John",
  lastName: "Doe"
}

personar.fullName.apply(personar1, ["Oslo", "Norway"]);

// bind()
const personb = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    console.log( this.firstName + " " + this.lastName);
  }
}

const member = {
  firstName:"Hege",
  lastName: "Nilsen",
}

let fullName = personb.fullName.bind(member);

fullName();

// memolization
function memoAdd() {
    let cache = new Map();

    return function (x, y) {
        let key = `${x},${y}`;
        if (cache.has(key)) {
            return cache.get(key); // return cached result
        } else {
            let result = x + y;
            cache.set(key, result);
            return result;
        }
    };
}

const add = memoAdd();
console.log(add(3, 4)); // 7 (calculates)
console.log(add(3, 4)); // 7 (from cache )
