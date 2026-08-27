// Task 7 — Debugging Node.js Programs (Fixed Version)
// Question: Introduce a bug where the countdown never reaches zero, debug it using Node.js/VS Code, and fix it.

// ============================================================================
// Debugging Explanation:
// ============================================================================
// Buggy Code Condition:
//   if (seconds > 0) { clearInterval(timer); }
//
// Debugging Analysis:
//   Using inspection/debugger, we observe that after the first interval tick,
//   `seconds` drops from 5 to 4. Since 4 > 0 evaluates to true, `clearInterval(timer)`
//   was triggered prematurely, preventing the countdown from ever reaching 0.
//
// Fix:
//   Change the condition to `seconds < 0` so the timer displays numbers down to 0
//   and terminates cleanly when finished.
// ============================================================================

let seconds = 5;

const timer = setInterval(() => {
    console.log(seconds);
    seconds--;

    if (seconds < 0) {
        clearInterval(timer);
        console.log("Countdown finished!");
    }
}, 1000);
