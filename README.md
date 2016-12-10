# Javascript-Concepts
I normally practice code and keep it on my local machine so that I can refer it later and revisit a particular topic.
But then I cannot access my local machine from anywhere except my home. Also, my practice programs are never commented well! :P

Hence, I thought of creating this repository where I can keep on adding simple well-commented Javascript programs which can be of help to me as well as others to understand Javascript core concepts.

So, what does this Repo has?
This repository contains simple examples/programs that explain core javascript concepts like callbacks, promises, generators etc.
I've written the programs in NodeJS so you'll need a Node Setup on your machine in order to run 'em.

[Download NodeJS](https://nodejs.org/en/download/)

As of now the Repo only contains only one program for Callback and one for promises as I've just started!
Will keep on updating the repo with basic programs that explain JS Concepts.

How to execute the code:
eg. node callback_1.js
eg. node promise_1.js

## [What is a callback?](./Callbacks/)
A callback function is any function that is passed to another function
Calback functions can be synchronous as well as asynchronous
For eg. Array.forEach(function(arr){}) takes a function as a parameter, but this is the synchronous callback

In case of a async callback, the code does not wait for the API to return the data unlike traditional synchronous API's.
Instead the control is passed back to the execution environment from where the code execution continues ahead.
Whenever the API is done what it was supposed to do, it'll call the callback function from where we can either return the data or error, if any.

E.g.
The native setTimeout and setInterval methods of javascript are the simplest examples of callbacks.
```javascript
// This would get called after 1 sec
setTimeout(function(){
  console.log("Hello World!")
}, 1000);

// This would get called after every 1 sec
setInterval(function(){
  console.log("Hello World!")
}, 1000)
```

## [What is a promise?](./Promises)
A promise in Javascript is very much like a promise is real-life.
For instance, your friend promises you that he'll give you his Assignment if he manages to do.
Now in this case you will either get the Assignment or Babaji ka Thullu!
A promise is a special kind of object in Javascript that lets you structure asynchronous code more efficiently.
A particular code that's written entirely using Callbacks can be re-written using Promises which will make it more readable and
easier to debug. (Basically it helps in avoiding callback hell)
<br/>
A promise object in Javascript either resolves or rejects.

So, if your friend fulfills the promise of giving you the assignment, the promise is said to be resolved, else it's said to be rejected.
The promise object has two methods "then" and "catch".
If the promise is resolved, the "then" method is called else the "catch"

E.g.
```javascript
var returnPromise = function(booleanVal){
  return new Promise(function(resolve, reject){
    if(booleanVal){
      resolve();
    }
    reject();
  });
}

var promise = returnPromise(true);
promise.then(function(){
  console.log("Promise resolved");
}).catch(function(){
  console.log("Promise rejected");
});
```
---------------------------------------------------------------------------------------------------------------
If you wish to contribute to this repository with your study material on Javascript, don't hestitate.
Also if you've any suggestions, please do help me improve with your constructive criticism.

I'm a social animal, so you can contact me on
* Facebook  : facebook.com/nvadujkar
* linkedin  : linkedin.com/in/ninad-vadujkar-58445a61
* Twitter   : @nv_vit
* instagram : @ninad_v
