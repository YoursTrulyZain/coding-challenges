class Clock{
    constructor() {
        this.creationTime = new Date();
        this.hours = this.creationTime.getHours();
        this.minutes = this.creationTime.getMinutes();
        this.seconds = this.creationTime.getSeconds();
    }

    getHours(){
        return this.hours;
    }

    getMinutes(){
        return this.minutes;
    }

    getSeconds(){
        return this.seconds;
    }

    addSecond(){
        this.seconds += 1;

        if(this.seconds === 59){
            this.seconds = 0;
            this.addMinute();
        }
    }

    addMinute(){
        this.minutes += 1;

        if(this.minutes === 59){
            this.minutes = 0;
            this.addHour();
        }
    }

    addHour(){
        this.hours += 1;

        if(this.hours === 24){
            this.hours = 0;
        }
    }

    displayTime24Hour(){
        console.log(`Current time: ${this.getHours()}:${this.getMinutes()}:${this.getSeconds()}`);
    }

    displayTime12Hour(){
        let tempHours = this.getHours();
        let suffix = "AM";

        if(tempHours >= 12){
            if(!tempHours === 12){
                tempHours = tempHours - 12;
            }
            suffix = "PM"
        }

        console.log(`Current time: ${tempHours}:${this.getMinutes()}:${this.getSeconds()} ${suffix}`);
    }
}

let clock = new Clock();
startClock(clock);
function startClock(){
    console.clear();
    clock.displayTime24Hour();
    clock.displayTime12Hour();
    clock.addSecond();
    setTimeout(startClock, 1000);
}