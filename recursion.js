/*******************************************************************
 * Recursion : When function call itself
 * otherwise it will get called for infinite time
 * If a function called itself then there must be end point
 *********************************************************************/
let counter = 1;
function displayName (num) {
    if(counter > num) {
        return;
    }
    console.log('My name is Suman Singh', counter);
    counter++;
    displayName(num);
} 

displayName(10);
// displayName();


/************************************************************************************************ *
// Another Concept
*Constructor functions are used to create objects in javascript.
*If we want to create multiple objects having similar properties and methods, constructor functions are used.
*Note- The name of a constructor function should always be written in Pascal Notation: 
every word should start with a capital letter.
*************************************************************************************************************/
function Person(name,age,gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  
  
  var person1 = new Person("Vivek", 76, "male");
  console.log(person1);
  
  var person2 = new Person("Courtney", 34, "female");
  console.log(person2);