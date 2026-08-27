// Task 5 — process.argv and process.stdin
// Question: Accept the countdown duration through process.argv and allow the user to type "cancel" to stop the countdown.

// Get countdown duration from command-line argument (default to 10 if not provided)
const arg = process.argv[2];
const duration = arg !== undefined ? Number(arg) : 10;

if (!Number.isFinite(duration) || duration <= 0) {
    console.log("Please provide a positive duration in seconds.");
    process.exit(1);
}

let remaining = duration;

console.log(`Countdown started for ${duration} seconds.`);
console.log('Type "cancel" and press Enter to stop.');

const timer = setInterval(() => {
    console.log(`Time remaining: ${remaining} seconds`);
    remaining--;

    if (remaining < 0) {
        clearInterval(timer);
        console.log("Time's up!");
        process.stdin.pause();
    }
}, 1000);

// Read input from the terminal
process.stdin.setEncoding("utf8");

process.stdin.on("data", (input) => {
    if (input.trim().toLowerCase() === "cancel") {
        clearInterval(timer);
        console.log("Countdown cancelled.");
        process.stdin.pause();
    }
});
