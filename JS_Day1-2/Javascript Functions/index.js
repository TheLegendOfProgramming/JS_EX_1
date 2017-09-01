//FUNCTIONS

//1)
//Observe: no return type, no type on parameters
function add(n1, n2){
   return n1 +n2;
}

var sub = function(n1,n2){
  return n1 - n2
}

var cb = function(n1,n2, callback){
    return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
};

//3)
var cb2 = function(n1,n2, callback) {
    try {
        if( (!typeof n1 === "number") == false
            ||  (!typeof n2 === "number") == false
            ||  (!typeof callback === "function") == false
        )
            throw new Error('One of the parameters defined is not of the right type');
    } catch (e) {
        console.log(e.name + ': ' + e.message);
    }

    return "Result from the two numbers: " + callback(n1,n2);
};

//4)
var mul = function(n1,n2) {
    return n1 % n2;
}

//START

//2)
console.log( add(1,2) )
console.log( add )
console.log( add(1,2,3) ) ;
console.log( add(1) );
console.log( cb2(3,3,add) );
console.log( cb2(4,3,sub) );
// console.log(cb(3,3,add()));
console.log(cb2(3,"hh",add));

//5)
console.log(cb2(2,2, function(n1,n2){
    return n1 + n2 + 1;
}));
