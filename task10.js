// Task 10 — JavaScript Promises
// Question: Rewrite checkTimeLeftCallback as a Promise-based function and use .then()/.catch().

function checkTimeLeftPromise(seconds) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (seconds < 0) {
                reject(new Error("Invalid duration"));
                return;
            }

            resolve(seconds);
        }, 1000);
    });
}

// Successful case
checkTimeLeftPromise(5)
    .then((remaining) => {
        console.log(`Time remaining: ${remaining} seconds`);
    })
    .catch((error) => {
        console.error("Error:", error.message);
    });

// Error / Rejection case
checkTimeLeftPromise(-5)
    .then((remaining) => {
        console.log(`Time remaining: ${remaining} seconds`);
    })
    .catch((error) => {
        console.error("Error:", error.message);
    });
