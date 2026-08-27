// Task 9 — setInterval, clearInterval and setTimeout
// Question: Print the remaining seconds every second, stop the interval exactly when the countdown reaches zero, and use setTimeout to display "Time's up!".

const duration = 5;
let remaining = duration;

const interval = setInterval(() => {
    console.log(`Time remaining: ${remaining} seconds`);

    if (remaining === 0) {
        clearInterval(interval);
        return;
    }

    remaining--;
}, 1000);

// Separate notification timer using setTimeout
setTimeout(() => {
    console.log("Time's up!");
}, duration * 1000);
