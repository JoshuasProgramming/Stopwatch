//Set global scope variables for seconds, minutes, hours and days of the stopwatch
let seconds = 00;
let minutes = 00;
let hours = 00;
let days = 0;
let begin;

//grab the empty p tag, called 'output' from the HTML document.
const output = document.getElementById('output');

//grab the button tag, called 'start' from the HTML document.
//Once the user presses the button an event happens...
const start = document.getElementById('start').addEventListener("click",(e)=>{

    //set the start button type to disabled as we don't want the user to keep pressing 'start' when it's already going
    document.getElementById('start').disabled = true;
    //use the setInterval() method to 'increment' the secounds, minutes, hours and minutes each 1000 miliseconds (1 second)
    begin = setInterval(increment, 1000);
    
});

//grab the button tag, called 'reset' from the HTML document.
//Once the user presses the button an event happens...
const reset = document.getElementById('reset').addEventListener("click",(e)=>{
    //reset the values back to the start
    seconds = 00;
    minutes = 00;
    hours = 00;
    days = 00;

    //pass through the 'begin' variable into the clearInterval method => this will pause it
    clearInterval(begin);

    //undisable the 'start' button
    document.getElementById('start').disabled = false;

    //output the stopwatch's reset value onto the HTML document
    output.innerHTML = days + " DAYS  <br>" + hours  + " HOURS   <br>" + minutes  + " MINUTES   <br>" + seconds + " SECONDS"; 
});

//grab the button tag, called 'stop' from the HTML document.
//Once the user presses the button an event happens...

const stop = document.getElementById('stop').addEventListener("click",(e)=>{
     //pass through the 'begin' variable into the clearInterval method => this will pause it
    clearInterval(begin);

    //undisable the 'start' button
    document.getElementById('start').disabled = false;
});


/**
 * 
 * increment() function
 * 1.increments the seconds by 1 each time it's called
 * 2. increments the minutes if seconds == 60, then resets the seconds
 * 3. increments the days if hours == 24, then resets the hours
 * 
 * => Outputs the values onto the screen
 */
function increment(){
    seconds++;

    if(seconds == 60){
        minutes++;
        seconds = 0;
    }

    if(minutes == 60){
        hours++;
        minutes = 0;
    }

    if(hours == 24){
        days++;
        hours = 0;
    }

    if((hours < 10)){ // 00:01:00:00
        output.innerHTML = days + " DAYS   <br>" + hours  + " HOURS   <br>" + minutes  + " MINUTES   <br>" + seconds + " SECONDS";
    }

    if((days < 10)){ // 01:00:00:00
        output.innerHTML = days + " DAYS   <br>" + hours  + " HOURS   <br>" + minutes  + " MINUTES   <br>" + seconds + " SECONDS";
    }

    if((seconds < 10)){ // 00:00:00:01
        output.innerHTML =  days + " DAYS   <br>" + hours  + " HOURS   <br>" + minutes  + " MINUTES   <br>" + seconds + " SECONDS";
    }

    if((minutes < 10)){ // 00:00:01:00 
        output.innerHTML =  days + " DAYS   <br>" + hours  + " HOURS   <br>" + minutes  + " MINUTES   <br>" + seconds + " SECONDS";
    }
    
    return;
}