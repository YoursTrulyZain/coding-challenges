/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
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
    // let promiseArray = [];
    let startTime = Date.now();
    waitOneSecond().then((result) => {
        console.log(result);
        waitTwoSecond().then((result) => {
            console.log(result);
            waitThreeSecond().then((result) => {
                console.log(result);
                let stopTime = Date.now();
                console.log((stopTime - startTime)/1000);
            });
        });
    });
}

calculateTime();