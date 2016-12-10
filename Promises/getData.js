// Require the core NodeJS File System module
var fs = require('fs');

// module.exports is used to export this particular method to other scopes.
// The below method returns a promise object. The promise object takes a callback function as a parameter that
// has two important methods resolve and reject.
// The below promise gets resolved if the file opens successfully, else it gets rejected.
module.exports = function(path){
  return new Promise(function(resolve, reject){
    fs.readFile(path, function(err, data){
      if(err) reject("Could not get required data");
      resolve(data);
    });
  });
}
