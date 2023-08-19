// Without using setInterval, try to code a counter in Javascript.
let counter = 0;

function displayCounter(){
    console.clear();
    console.log(counter);
    counter++;
    setTimeout(displayCounter, 1000);
}

displayCounter();