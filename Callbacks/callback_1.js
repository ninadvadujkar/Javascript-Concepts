// Require the core NodeJS File System module
var fs = require('fs');


// A callback function is any function that is passed to another function.
// Calback functions can be synchronous as well as asynchronous
// For eg. Array.forEach(function(arr){}) takes a function as a parameter, but this is the synchronous callback
// In case of a async callback, the code does not wait for the API to return the data unlike traditional synchronous API's.
// Instead the control is passed back to the execution environment from where the code execution continues ahead.
// Whenever the API is done what it was supposed to do, it'll call the callback function from where we can either return the data or
// error, if any.

// The one that is seen below is an example of async API
// Reads file asynchronously
// As you can notice, the readFile method takes 2nd parameter as a callback function.
// The callback function is an error-first callback. This essentially means that it's first parameter holds error if any.
// It's second parameter holds the data that we get from the file.
// If you run this program you'll notice that the statement at line #24 will get executed first and then the data is printed.
// That's what I was saying above, the code won't wait for this API to return data. It won't just halt and keep on waiting on the data.
fs.readFile("list.txt", function(err, data){
  if(err) throw err;
  console.log("Data from async API \n" + data.toString());
});
console.log("I'm after call made to fs.readFile but would get printed first");

// This one's a synchronous API and reads file synchronously
// You'll notice that in this case, the code will wait for the data to be returned
// i.e. the data returned would be printed before the last statement at line #31.
var data = fs.readFileSync("list.txt");
console.log("Data from sync API \n" + data.toString());
console.log("I'm after call made to fs.readFileSync");
