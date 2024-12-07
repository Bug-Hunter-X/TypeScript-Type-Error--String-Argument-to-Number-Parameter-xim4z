# TypeScript Type Error: String Argument to Number Parameter

This repository demonstrates a common type error in TypeScript and how to resolve it. The error occurs when a function expects a number argument but receives a string instead.

## Bug
The `bug.ts` file contains a function `add` that expects two number arguments and returns their sum. However, the code attempts to pass a string ("2") as the second argument, resulting in a type error.

## Solution
The `bugSolution.ts` file provides a solution by explicitly checking the type of the arguments using type guards or by using a more flexible type like `string | number`.  Error handling is also implemented to manage unexpected inputs more gracefully.