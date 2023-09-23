/*************************************************** *
    Hoisting is the default behavior of moving all the 
    declarations at the top of the scope before code execution.

/*************************************************** */
function greets() {
    // debugger;
    console.log('Checking Hoisting');
}

greets(); // hoisting will work
//-------------------------

// arrow function
// arrowFunction(); // Function Expression not hoiseted
var arrowFunction = () => {
    console.log('Arrow Function...');
}

console.log('value', abc);

var abc = 77; //  Intialization is not hoisted


// Type of
var typeof_variable = 10;
if(typeof_variable) {
console.log('Default type: ', typeof(typeof_variable));
}

function doSomething() {
    console.log(this);
  }
     
  doSomething();