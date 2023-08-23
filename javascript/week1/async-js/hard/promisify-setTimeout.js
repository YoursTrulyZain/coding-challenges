function wait(n) {
    let seconds = n * 1000;
    let promise1 = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promise has resolved")
        }, seconds);
    });

    return promise1;
}

wait(4).then((result) => {
    console.log(result);
});