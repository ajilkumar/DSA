let n = 4;
for (let i = 1; i <= 4; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += j + " ";
  }
  console.log(row);
}

// output:
// 1
// 1 2
// 1 2 3
// 1 2 3 4

// ------------------------------- //

// Reverse trinagle pattern
{
  let n = 4;
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = i + 1; j > 0; j--) {
      row += j + " ";
    }
    console.log(row);
  }
}

// output:
// 1
// 2 1
// 3 2 1
// 4 3 2 1
