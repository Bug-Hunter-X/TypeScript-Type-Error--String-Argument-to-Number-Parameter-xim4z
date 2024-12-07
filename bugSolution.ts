function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: string | number): number {
  if (typeof b === 'string') {
    const numB = parseFloat(b);
    if (isNaN(numB)) {
      return a; // Or throw an error
    }
    return a + numB;
  } else {
    return a + b;
  }
}

let result1 = addSafe(1, "2"); // works correctly
let result2 = addSafe(1, 2); // works correctly
let result3 = addSafe(1, "abc"); // gracefully handles error