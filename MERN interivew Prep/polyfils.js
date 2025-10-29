//Polyfil of map, filter and reduce

Array.prototype.mymap = function(cb) {
    let temp = [];
    for(let i=0 ; i<this.length; i++){
        temp.push(cb(this[i], i, this))
    }
    return temp;
}

let nums = [2, 3, 4]

const multipleOfTwo = nums.mymap((num, i, arr) => {
    return num*2
})

console.log(multipleOfTwo)

//filter
Array.prototype.myfilter = function(cb) {
    let temp = [];
    for(let i=0 ; i<this.length; i++){
        if(i in this){
            if(cb(this[i], i, this)){
                temp.push(this[i])
            }
        }
    }
    return temp;
}

const arr1 = [10, 25, 30, 5];

const filtered = arr1.myfilter(num => num > 20)

console.log(filtered)


//reduce
// const res = arr.reduce((acc, val, i, arr) => {}, initialval)

Array.prototype.myReduce = function(cb, initVal) {
    let acc = initVal;
    for(let i=0; i<this.length; i++){
        acc = acc? (cb(acc, this[i], i, this)): this[i]
    }
    return acc;
}

const arr2 = [1, 2, 3, 4];
const sum = arr2.myReduce((acc, val) => acc + val, 0);
console.log(sum); // 10

//call
// Syntax: func.call(thisObj, arg1, arg2, ...)

Function.prototype.myCall = function(context= {}, args){
    //1st check if this is a func or not
    if(typeof(this) !== "function"){
        throw new Error("this is not a function");
    }
    //bind the context with this and args
    context.fun = this;
    context.fun(...args)
}

const user = {
    name: "krit",
    location: "Bangalore"
}

function greet(greeting, location){
    console.log(`${greeting} ${this.name}, Are you from ${this.location}`)
}

//Apply
// Syntax: func.apply(thisObj, [arg1, arg2, ...])

Function.prototype.myApply = function(context= {}, args){
    //1st check if this is a func or not
    if(typeof(this) !== "function"){
        throw new Error("this is not a function");
    }
    // check if the args is array or not
    if(!Array.isArray(args)){
        throw new Error("CreatedListFromArray like is not an array ")
    }
    //bind the context with this and args
    context.fun = this;
    context.fun([...args])
}

const user2 = {
    name: "krit",
    location: "Bangalore"
}

function greet(greeting){
    console.log(`${greeting} ${this.name}, Are you from ${this.location}?`)
}

greet.myApply(user2, ["Hey"])


//Apply
// Syntax: func.bind(thisObj, [arg1, arg2, ...])

Function.prototype.myBind = function(context= {}, ...args){
    //1st check if this is a func or not
    if(typeof(this) !== "function"){
        throw new Error("this is not a function");
    }
    context.func = this;
    return function(...newArgs){
        return context.func(...args, ...newArgs)
    }
    
}

const user3 = {
    name: "krit",
    location: "Bangalore"
}

function greet(car, currency, price){
    console.log(`Hey ${this.name}, I have purshased a new ${car} with worth ${currency} ${price}`)
}

const person = greet.myBind(user3);
person("Ferrari", "$", 50000)

// What is a Promise in JavaScript

// A Promise in JavaScript is an object that represents the eventual completion or failure of an asynchronous operation.

// Promise States

// A promise can be in one of three states:

// 1️⃣ Pending – initial state, operation not yet complete
// 2️⃣ Fulfilled – operation completed successfully (resolve)
// 3️⃣ Rejected – operation failed (reject)


const myPromise = new Promise((resolve, reject) => {
    const success = true;
    
    setTimeout(() => {
        if (success) resolve("✅ Data fetched successfully");
        else reject("❌ Something went wrong");
    }, 1000);
});

myPromise
.then(data => console.log(data))
.catch(err => console.error(err));


// Promise Polyfill Implementation

function MyPromise(executor) {
  let onResolve, onReject;
  let isFulfilled = false, isRejected = false, isCalled = false;
  let value;

  function resolve(val) {
    isFulfilled = true;
    value = val;
    if (typeof onResolve === "function" && !isCalled) {
      onResolve(value);
      isCalled = true;
    }
  }

  function reject(reason) {
    isRejected = true;
    value = reason;
    if (typeof onReject === "function" && !isCalled) {
      onReject(value);
      isCalled = true;
    }
  }

  this.then = function(callback) {
    onResolve = callback;
    if (isFulfilled && !isCalled) {
      onResolve(value);
      isCalled = true;
    }
    return this;
  };

  this.catch = function(callback) {
    onReject = callback;
    if (isRejected && !isCalled) {
      onReject(value);
      isCalled = true;
    }
    return this;
  };

  // Execute the executor function immediately
  try {
    executor(resolve, reject);
  } catch (err) {
    reject(err);
  }
}
