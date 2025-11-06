// Pyramid Number pattern

// There are n rows.

// Each row has:

// Some leading spaces (to center the numbers).

// Then ascending numbers up to the row number.

// Then descending numbers back down.

// Let’s break it down for row i:

// Spaces: (n - i)

// Ascending numbers: 1 → i

// Descending numbers: (i - 1) → 1

let n = 4;

for (let i = 1; i <= n; i++) {
  let row = "";

  // Print leading spaces
  for (let s = 1; s <= n - i; s++) {
    row += "  "; // two spaces for better alignment
  }

  // Print ascending numbers
  for (let j = 1; j <= i; j++) {
    row += j + " ";
  }

  // Print descending numbers
  for (let j = i - 1; j >= 1; j--) {
    row += j + " ";
  }

  console.log(row);
}

// output:
//       1
//     1 2 1
//   1 2 3 2 1
// 1 2 3 4 3 2 1
