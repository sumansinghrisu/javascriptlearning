/********************************************************************************* *
 * Memoriztion is an optimization technique that can be used to reduce time consuming
 * calculation by saving previous input to something called catche and returning the 
 * result from it.
 **********************************************************************************/

let sum = 0;
let calc = (n) => {
    for(let i=0; i<=n; i++) {
        sum = sum + i;   
    };
    return sum;
}

let memorize = (fun) => {
    let cache = {};
    return (...args) => {
        let num = args[0];
        if(num in cache) {
            return cache[num];
        } else {
            result = fun(num)
            cache[num] = result;
            return result;
        }
    }
}



console.time();
// console.log('sum: ', calc(5));
let memo = memorize(calc);
console.log(memo(5));
console.timeEnd();