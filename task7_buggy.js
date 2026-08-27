// Task 7 — Buggy Demonstration
// Question: Introduce a bug where the countdown never reaches zero, debug it using Node.js/VS Code, and fix it.

let seconds = 5;

const timer = setInterval(() => {
    console.log(seconds);
    seconds--;

    // BUG: This condition is wrong because seconds > 0 is true immediately on the first tick!
    if (seconds > 0) {
        clearInterval(timer);
    }
}, 1000);
