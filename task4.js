// Task 4 — Node.js REPL
// Question: In the Node REPL, calculate the seconds remaining between two Date objects and move the working code into countdown.js.

// Calculate difference between future timestamp and current timestamp in seconds
const start = new Date();
const end = new Date(start.getTime() + 10000); // 10 seconds ahead

const secondsRemaining = Math.ceil((end - start) / 1000);

console.log(`Seconds remaining: ${secondsRemaining}`);
