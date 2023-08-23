function sleep (seconds) {
    let startTime = Date.now();
    while(Date.now() - startTime < seconds * 1000){

    }
}
console.log("Start");
sleep(2);
console.log("Stop");
