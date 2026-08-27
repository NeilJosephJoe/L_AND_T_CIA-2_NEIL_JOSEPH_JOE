# CIA-2 Practical Question Paper - Set 2 - Node.js & Asynchronous JavaScript

Attempted Tasks: Task 1, Task 2, Task 3, Task 4, Task 5, Task 6, Task 7, Task 8, Task 9, Task 10

---

## File Structure

| File | Description | Run Command |
|---|---|---|
| countdown.js | Main countdown application file | node countdown.js |
| task1.js | Task 1: Node.js Development Setup | node task1.js |
| task2.js | Task 2: Architecture (V8 & libuv) | node task2.js |
| task3.js | Task 3: Timers and setInterval | node task3.js |
| task4.js | Task 4: REPL Date Difference | node task4.js |
| task5.js | Task 5: process.argv and process.stdin | node task5.js 10 |
| task6.js | Task 6: Nodemon Live-Reload | npm run dev |
| task7.js | Task 7: Debugging and Fixed Code | node task7.js |
| task7_buggy.js | Task 7: Buggy Code for Demo | node task7_buggy.js |
| task8.js | Task 8: Callback Functions | node task8.js |
| task9.js | Task 9: setInterval and setTimeout | node task9.js |
| task10.js | Task 10: JavaScript Promises | node task10.js |

---

## Tasks and Solutions

### Task 1 - Node.js Development Setup & Running Node.js Files

**Question:** Initialize a Node.js project using `npm init -y`, create `countdown.js`, run it, and print `"Countdown App Ready"`.

**Code (`task1.js` / `countdown.js`):**
```javascript
console.log("Countdown App Ready");
```

**Commands:**
```bash
npm init -y
node countdown.js
```

**Output:**
```text
Countdown App Ready
```

---

### Task 2 - Understanding How Node.js Works & Architecture

**Question:** Explain how V8 and libuv allow Node.js to accept input while a timer runs. Demonstrate using `setTimeout`.

**Explanation:**
V8 executes JavaScript code synchronously on the main thread, while libuv handles asynchronous operations (such as timers and I/O) in the background via the event loop. This allows Node.js to continue executing other code without blocking while waiting for the timer to complete.

**Code (`task2.js`):**
```javascript
setTimeout(() => {
    console.log("Timer finished");
}, 3000);

console.log("Node.js is still running...");
```

**Output:**
```text
Node.js is still running...
Timer finished
```

---

### Task 3 - Node.js Timers & setInterval

**Question:** Refer to the Node.js timers documentation and adapt an example to create a basic countdown using `setInterval`.

**Code (`task3.js`):**
```javascript
let seconds = 5;

const timer = setInterval(() => {
    console.log(`Time remaining: ${seconds} seconds`);
    seconds--;

    if (seconds < 0) {
        clearInterval(timer);
        console.log("Countdown finished!");
    }
}, 1000);
```

**Sample Output:**
```text
Time remaining: 5 seconds
Time remaining: 4 seconds
Time remaining: 3 seconds
Time remaining: 2 seconds
Time remaining: 1 seconds
Time remaining: 0 seconds
Countdown finished!
```

---

### Task 4 - Node.js REPL

**Question:** In the Node REPL, calculate the seconds remaining between two `Date` objects and move the working code into `countdown.js`.

**REPL Verification:**
```javascript
const start = new Date();
const end = new Date(start.getTime() + 10000);

const secondsRemaining = Math.ceil((end - start) / 1000);
console.log(secondsRemaining);
```

**Code (`task4.js`):**
```javascript
const start = new Date();
const end = new Date(start.getTime() + 10000);

const secondsRemaining = Math.ceil((end - start) / 1000);

console.log(`Seconds remaining: ${secondsRemaining}`);
```

**Output:**
```text
Seconds remaining: 10
```

---

### Task 5 - process.argv and process.stdin

**Question:** Accept the countdown duration through `process.argv` and allow the user to type `"cancel"` to stop the countdown.

**Code (`task5.js`):**
```javascript
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

process.stdin.setEncoding("utf8");

process.stdin.on("data", (input) => {
    if (input.trim().toLowerCase() === "cancel") {
        clearInterval(timer);
        console.log("Countdown cancelled.");
        process.stdin.pause();
    }
});
```

**Commands:**
```bash
node task5.js 10
```

**Sample Output:**
```text
Countdown started for 10 seconds.
Type "cancel" and press Enter to stop.
Time remaining: 10 seconds
Time remaining: 9 seconds
cancel
Countdown cancelled.
```

---

### Task 6 - Nodemon

**Question:** Install `nodemon` as a development dependency and create an `npm run dev` script. Demonstrate automatic restarting after modifying the file.

**Installation:**
```bash
npm install --save-dev nodemon
```

**package.json configuration:**
```json
{
  "scripts": {
    "dev": "nodemon countdown.js"
  }
}
```

**Run Command:**
```bash
npm run dev
```

**Output:**
```text
[nodemon] starting `node countdown.js`
Countdown App Ready
[nodemon] restarting due to changes...
[nodemon] starting `node countdown.js`
Countdown App Updated
```

---

### Task 7 - Debugging Node.js Programs

**Question:** Introduce a bug where the countdown never reaches zero, debug it using Node.js/VS Code, and fix it.

**Buggy Code (`task7_buggy.js`):**
```javascript
let seconds = 5;

const timer = setInterval(() => {
    console.log(seconds);
    seconds--;

    // BUG: This condition clears the interval prematurely on the first tick.
    if (seconds > 0) {
        clearInterval(timer);
    }
}, 1000);
```

**Debugging Explanation & Fixed Code (`task7.js`):**
```javascript
// Debugger inspection showed that `seconds > 0` evaluated to true after the first tick,
// causing the timer to stop early. Changing the condition to `seconds < 0` fixed the issue.

let seconds = 5;

const timer = setInterval(() => {
    console.log(seconds);
    seconds--;

    if (seconds < 0) {
        clearInterval(timer);
        console.log("Countdown finished!");
    }
}, 1000);
```

---

### Task 8 - Callback Functions

**Question:** Create `checkTimeLeftCallback(seconds, callback)` that simulates a delay using `setTimeout`, then calls the callback with the remaining time.

**Code (`task8.js`):**
```javascript
function checkTimeLeftCallback(seconds, callback) {
    setTimeout(() => {
        if (seconds < 0) {
            callback(new Error("Invalid duration"), null);
            return;
        }

        callback(null, seconds);
    }, 1000);
}

checkTimeLeftCallback(5, (error, remaining) => {
    if (error) {
        console.error("Error:", error.message);
        return;
    }

    console.log(`Time remaining: ${remaining} seconds`);
});
```

**Output:**
```text
Time remaining: 5 seconds
```

---

### Task 9 - setInterval, clearInterval and setTimeout

**Question:** Print the remaining seconds every second, stop the interval exactly when the countdown reaches zero, and use `setTimeout` to display `"Time's up!"`.

**Code (`task9.js`):**
```javascript
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

setTimeout(() => {
    console.log("Time's up!");
}, duration * 1000);
```

**Output:**
```text
Time remaining: 5 seconds
Time remaining: 4 seconds
Time remaining: 3 seconds
Time remaining: 2 seconds
Time remaining: 1 seconds
Time remaining: 0 seconds
Time's up!
```

---

### Task 10 - JavaScript Promises

**Question:** Rewrite `checkTimeLeftCallback` as a Promise-based function and use `.then()`/`.catch()`.

**Code (`task10.js`):**
```javascript
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

checkTimeLeftPromise(5)
    .then((remaining) => {
        console.log(`Time remaining: ${remaining} seconds`);
    })
    .catch((error) => {
        console.error("Error:", error.message);
    });
```

**Output:**
```text
Time remaining: 5 seconds
```
