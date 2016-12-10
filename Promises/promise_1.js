// Require the getData module
var getData = require('./getData');

//getData returns us with a promise
var promise = getData("list.txt");

// The promise object has "then" and "catch" methods attached to it.
// If the promise is resolved, the then method is executed. The data passed to the resolve method can be accessed in the then method
// If the promise is rejected, in this case if the file doesn't exist, then the catch is executed.
promise.then(function(data){
  console.log("Here's your data \n" + data.toString());
}).catch(function(err){
  console.log("Here's the error! " + err);
});
