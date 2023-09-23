/************************************************************************
 * 1. What is difference between map() & forEach & for loop
    Ans: forEach & for loop modify the actual array. We can't modify it by adding filter
**********************************************************************************************/
let arr = [2, 4, 5, 8];

let mapResult = arr.map(item => {
    return item + 2;
}).filter((item) => item % 2 === 0); // [4,6,8]

// let forEachResult = arr.forEach((element, index) => {
//      arr[index] = element + 3
// });

// for(let i=0; i<arr.length;i++) {
//     arr[i] = arr[i] + 5;
// }
console.log('Actual array', arr); //after forEach [5,7,8,11]
console.log('mapResult', mapResult);
// console.log('forEach', forEachResult); 

/********************************************************************************************
 * 2. Difference between undefined & null
 * Ans: underfined return undefined & null retun object
**********************************************************************************************/

console.log(typeof (undefined));
console.log(typeof (null));

let num;

console.log('num', num); // undefined

console.log(null == undefined); // true
console.log(null === undefined); // false
/**********************************************************************************************
 * 3. What is Event Deligation
 * It's function which can be add to the parent function to call chield element.
************************************************************************************************/

document.querySelector("#products").addEventListener("click", (event) => {
    console.log('selected item', event);
    if (event.target.tagName == 'LI') {
        window.location.href = '/' + event.target.outerText;
    }
});

/***********************************************************************************************
 * 4. Flatten this array
*************************************************************************************************/
let arr2 = [
    [1, 2],
    [3, 4, 5],
    [6, 7, 8, 9],
    [10, [11, 12], 13]
]

let flattenArray = [].concat(...arr2);
console.log('flattenArray', flattenArray);

let flattenArray2 = arr2.flat(2);
console.log('flattenArray2', flattenArray2);

let customFlatArr = (refArr, depth = 1) => {
    let fa = [];
    // for(let i = 0; i < ar.lenth; i++) {
    refArr.forEach((ar) => {
        if (Array.isArray(ar) && depth > 0) {
            fa.push(...customFlatArr(ar, depth - 1));
        } else {
            fa.push(ar)
        }
    });
    return fa;
}

// let fArr = customFlatArr(arr2, 2);
console.log('fArr', customFlatArr(arr2, 2));

/*******************************************************************
 * What will be the output 
********************************************************************/

// const fun = () => {
//     for (var i = 0; i < 3; i++) {
//         setTimeout(() => {
//             console.log(i);
//         }, i * 4000);
//     }
// }

// fun() // out will be 3

/*************************************************************************
 * Diffrence between Call, Apply & Bind
***************************************************************************/

var person = {
    name: "Addity",
    showName: function (param)  {
        console.log(this.name, param);
    }
}

person.showName('Kumar'); // Aaditya Kumar

changeName = {
    name: 'Suman'
}

person.showName.call(changeName, 'Singh'); // Suman Singh
changeName2 = {
    name: 'Ritu'
}
person.showName.apply(changeName2, ['Kumari']); // Ritu Kumari
changeName3 = {
    name: 'Gunnu'
}
let retunName = person.showName.bind(changeName3);
retunName('Babu'); // Gunnu Babu
console.log('---------------------------');
/***************************************************************************************
 * Conposition Polyfill
********************************************************************************************/
let addNum = (num) => {
    return num + 5;
}

let subNum = (num) => {
    return num - 2;
}

let mulNum = (num) => {
    return num * 4;
}
let composition = (...functions) => {
    return (args) => {
        return functions.reduceRight((arg, fn) => fn(arg), args);
    }
}

let compo = composition(addNum, subNum, mulNum);
console.log('compo',compo(5));

// encapsulating the pipe function
const pipe = (funcA , funcB, funC) => {
    return (arg) => {
        const add = funcA(arg);
        const sub = funcB(add);
        const mul = funC(sub);
        return mul;
    }
}
//print the result
console.log(pipe(addNum,subNum,mulNum)(5));

/*************************************************************************************
 * Promise.all
 * If all promise fullfill then only it'll call
*****************************************************************************************/

let getName = (text, time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text);
        }, time);
    });
}
let getLName = (text, time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text);
        }, time);
    });
}
//Promise.reject('s') for fail text
Promise.all([getName('Hi', 5000), getLName('Suman', 2000), Promise.resolve('Hello')]).then(result => {
    console.log('Promise All',result);
});

// Anther way
function myPromiseAll(promises) {
    let result = [];
    return new Promise((resolve, reject) => {
        promises.forEach((p, index) => {
            p.then(res => {
                result.push(res);
                if(index === promises.length - 1) {
                    resolve(result);
                }
            }).catch(e => {
                reject(e);
            })
        })
    })
}

myPromiseAll([getName('Hi', 1000), getLName('Suman', 2000), Promise.resolve('Hello')]).then(result => {
    console.log('myPromiseAll',result);
});