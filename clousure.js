/********************************************************************************************* *
 * A closure is the combination of a function bundled together (enclosed) with references to its surrounding state 
 * (the lexical environment)
/****************************************************************************************************** */
let fn = 'Suman';
firstName = () => {
    fn = 'Risu';
    {
        fn = 'Aaditya';
        console.log('First Name: under obj', fn); 
    }
    console.log('First Name: ', fn);
    middleName = () => {
        let mn = 'Kumar';
        console.log('Middle Name: ', mn);
        lastName = () => {
            let ln = 'Singh';
            console.log('Last Name: ', ln);
        }
    }
    let mn = 'Babu';
    middleName();
}

firstName(); 
lastName();

/*--------------------------------------------------------*/
init = () => {
    let name = 'Suman'
    displayName = () => {
        console.log('Name', name);
    }
    return name;
}
nam = init();
nam()
console.log();
