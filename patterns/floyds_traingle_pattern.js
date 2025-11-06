let n = 4,
  num = 1;
for (let i = 0; i <= n; i++) {
  let row = "";
  for (let j = 1; j < i + 1; j++) {
    row += num + " ";
    num++;
  }
  console.log(row);
}

//  output
// 1
// 2 3
// 4 5 6
// 7 8 9 10

// -------------------------------------- //

// FLoyds triangle pattern for characters

{
  let n = 4;
  let charCode = 65; // ASCII code for 'A'
  for (let i = 1; i <= n; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
      row += String.fromCharCode(charCode) + " ";
      charCode++;
    }
    console.log(row);
  }
}

// output: 
// A
// B C
// D E F
// G H I J
