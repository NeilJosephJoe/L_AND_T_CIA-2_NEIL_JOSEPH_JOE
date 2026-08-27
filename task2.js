// Task 2 — Understanding How Node.js Works & Architecture
// Question: Explain how V8 and libuv allow Node.js to accept input while a timer runs. Demonstrate using setTimeout.

// Explanation:
// V8 executes JavaScript code synchronously, while libuv handles asynchronous
// operations such as timers, file I/O, and networking via event loop and thread pool.
// Therefore, Node.js can continue executing other code while the timer waits in the background.

setTimeout(() => {
    console.log("Timer finished");
}, 3000);

console.log("Node.js is still running...");
