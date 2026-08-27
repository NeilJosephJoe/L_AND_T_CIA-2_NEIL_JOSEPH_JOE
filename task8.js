// Task 8 — Callback Functions
// Question: Create checkTimeLeftCallback(seconds, callback) that simulates a delay using setTimeout, then calls the callback with the remaining time.

function checkTimeLeftCallback(seconds, callback) {
    setTimeout(() => {
        if (seconds < 0) {
            callback(new Error("Invalid duration"), null);
            return;
        }

        callback(null, seconds);
    }, 1000);
}

// Test case 1: Successful callback invocation
checkTimeLeftCallback(5, (error, remaining) => {
    if (error) {
        console.error("Error:", error.message);
        return;
    }

    console.log(`Time remaining: ${remaining} seconds`);
});

// Test case 2: Error handling with negative seconds
checkTimeLeftCallback(-1, (error, remaining) => {
    if (error) {
        console.error("Error handling test:", error.message);
        return;
    }

    console.log(`Time remaining: ${remaining} seconds`);
});
