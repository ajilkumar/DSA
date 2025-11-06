// Inverted triangle pattern
let n = 4;

for (let i = 1; i <= n; i++) {
  let row = "";

  // Print spaces (each level has one extra indent)
  for (let s = 1; s < i; s++) {
    row += "  "; // two spaces for nice alignment
  }

  // Print numbers
  for (let j = i; j <= n; j++) {
    row += i + " ";
  }

  console.log(row.trimEnd());
}
