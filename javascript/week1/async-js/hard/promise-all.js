/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

function waitOneSecond() {
    let promise1 = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Resolve promise 1");
        }, 1000);
    });

    return promise1;
}

function waitTwoSecond() {
    let promise2 = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Resolve promise 2");
        }, 2000);
    });

    return promise2;
}

function waitThreeSecond() {
    let promise3 = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Resolve promise 3");
        }, 3000);
    });

    return promise3;
}

function calculateTime() {
    let promiseArray = [];
    let startTime = Date.now();
    promiseArray.push(waitOneSecond());
    promiseArray.push(waitTwoSecond());
    promiseArray.push(waitThreeSecond());
    Promise.all(promiseArray).then((results) => {
        console.log(results);
        let stopTime = Date.now();
        console.log((stopTime - startTime)/1000);
    });
}

calculateTime();