// Hollow diamod pattern

/*

A diamond has two halves:

Upper half (including middle row)

Lower half (mirror of upper)

For each row:

Print some spaces at the start to center the stars.

Then print stars:

For the first and last positions of the row → print *

Else → print space " " (to make it hollow)

*/

let n = 4;

// Upper half
for (let i = 1; i <= n; i++) {
  let row = '';

  // Spaces before stars
  for (let s = 1; s <= n - i; s++) {
    row += ' ';
  }

  // Stars and hollow spaces
  for (let j = 1; j <= 2 * i - 1; j++) {
    if (j === 1 || j === 2 * i - 1) {
      row += '*';
    } else {
      row += ' ';
    }
  }

  console.log(row);
}

// Lower half
for (let i = n - 1; i >= 1; i--) {
  let row = '';

  // Spaces before stars
  for (let s = 1; s <= n - i; s++) {
    row += ' ';
  }

  // Stars and hollow spaces
  for (let j = 1; j <= 2 * i - 1; j++) {
    if (j === 1 || j === 2 * i - 1) {
      row += '*';
    } else {
      row += ' ';
    }
  }

  console.log(row);
}


/*
output:
   *
  * *
 *   *
*     *
 *   *
  * *
   *

*/ 