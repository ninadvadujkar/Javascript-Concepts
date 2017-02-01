
// Callback Demonstration

var cb = function(data){
    if(!data){
        console.log("Cannot vote!");
    } else {
        console.log("Go ahead and vote!");
    }
}

function checkAge(name, age, callback){
    if(age < 18){
       callback(null);
       return;
    }
    callback();
    return 1;
}

checkAge("Ninad", 15, cb);