// Task 3 — Node.js Timers & setInterval
// Question: Refer to the Node.js timers documentation and adapt an example to create a basic countdown using setInterval.

// Methods used from the Node.js timers module:
// setInterval(), clearInterval()

let seconds = 5;

const timer = setInterval(() => {
    console.log(`Time remaining: ${seconds} seconds`);
    seconds--;

    if (seconds < 0) {
        clearInterval(timer);
        console.log("Countdown finished!");
    }
}, 1000);
