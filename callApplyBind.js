/** Call ************************************************************************************ *
    It’s a predefined method in javascript.
    This method invokes a method (function) by specifying the owner object.
/******************************************************************************************** */
function sayHello() {
    return "Hello " + this.name;
}
var obj = { name: "Sandy" };
console.log('Call Method', sayHello.call(obj));

// call() accepts arguments:
function saySomething(message) {
    return this.name + " is " + message;
}
var person4 = { name: "John" };
saySomething.call(person4, "awesome");
// Returns "John is awesome"

/** apply() **************************************************************************************** *
    The apply method is similar to the call() method. The only difference is that,
    call() method takes arguments separately whereas, apply() method takes arguments as an array.
/******************************************************************************************* ********/
function saySomething(message) {
    return this.name + " is " + message;
}
var person4 = { name: "John" };
console.log(saySomething.apply(person4, ["awesome"]));
// Returns "John is awesome"

/** bind() *************************************************************************************************** *
 * This method returns a new function, where the value of “this” 
 * keyword will be bound to the owner object, which is provided as a parameter. 
/************************************************************************************************************ */
var bikeDetails = {
    displayDetails: function(registrationNumber,brandName){
    return this.name+ " , "+ "bike details: "+ registrationNumber + " , " + brandName;
  }
}
   
var person1 = {name:  "Vivek"};
     
var detailsOfPerson1 = bikeDetails.displayDetails.bind(person1, "TS0122", "Bullet");
      
// Binds the displayDetails function to the person1 object
        
      
console.log(detailsOfPerson1());
//Returns Vivek, bike details: TS0122, Bullet

/** Currying Function ****************************************************************************** *
    Currying is an advanced technique to transform a function of arguments n, to n 
    functions of one or fewer arguments.
/*************************************************************************************************** */ 
let firstName = (f) => {
    return (l) => {
        return f + l;
    }
}

console.log('curring funtion..', firstName('Suman')('Singh'));