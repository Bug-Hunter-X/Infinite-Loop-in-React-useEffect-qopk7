# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook: creating an infinite loop by incorrectly including the state variable in the dependency array.  The `bug.js` file contains the buggy code, while `bugSolution.js` provides the corrected version.

## Bug Description
The `useEffect` hook is designed to perform side effects after a component renders.  However, if the dependency array includes a state variable that is modified within the `useEffect` itself, it creates a loop: the effect runs, updates the state, triggering a re-render, which runs the effect again, and so on.

## Solution
The solution lies in carefully considering what needs to be in the dependency array.  If the effect's logic doesn't depend on the state variable, omit it from the array. Alternatively, use a different state variable. 