/*****************************************************************************************************************
 * Programers build objects, which are representations of real-time entities, in traditional OO programming. 
 * Classes and objects are the two sorts of abstractions. A class is a generalization of an object, 
 * whereas an object is an abstraction of an actual thing. A Vehicle, for example, is a specialization of a Car. 
 * As a result, automobiles (class) are descended from vehicles (object).

 *  Classical inheritance differs from prototypal inheritance in that classical inheritance is confined to classes 
    that inherit from those remaining classes, but prototypal inheritance allows any object to be cloned via an 
    object linking method. Despite going into too many specifics, a prototype essentially serves as a template 
    for those other objects, whether they extend the parent object or not
 
******************************************************************************************************************/

let object1 = {
    name: 'Suman',
    city: 'Bangalore',
    getIntro: function() {
        console.log(this.name + ' from ' + this.city);
    }
}

let object2 = {
    name: 'Aaditya'
}

object2.__proto__ = object1;

console.log('object2', object2.city); // Bangalore
console.log('object2.getInro', object2.getIntro()) // Aaditya from Bangalore
console.log('object1.getIntro', object1.getIntro()); // Suman from Bangalore


Function.prototype.mybind = function() {
    console.log('geting access from chield');
}


function fun() {
    console.log(fun.mybind()); //geting access from chield
}fun();

