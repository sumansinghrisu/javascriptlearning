/*******************************************************************************************************************
 * There is special syntex in javascript, we can make any funtion async and wait for promise. 
 * Async function always retun promise and  wrap nopromises in it.
 ****************************************************************************************************************/

let wether = async () => {
    let delhiWether = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('27 Deg');
        }, 2000);
    })
    let bangaloreWether = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('21 Deg');
        }, 7000);
    })

    console.log('Fetching Delhi Wether...');
    let dWether = await delhiWether;
    console.log('Fetched Delhi wether', dWether);
    console.log('Fetching Bangalore Wether...');
    let bWether = await bangaloreWether;
    console.log('Fetched Bangalore Wether...', bWether);
    return [dWether, bWether];
}

w = wether();
w.then(result => {
    console.log('wether', w);
})
