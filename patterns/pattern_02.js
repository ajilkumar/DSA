{
  let rows = 3,
    num = 1;
  for (let i = 0; i < rows; i++) {
    let row = "";

    for (let j = 0; j < rows; j++) {
      row += num;
      num++;
    }
    console.log(row);
  }
}
// output: 
// 123
// 456
// 789

console.log(`------------------`);

let rows = 3, cols = 4, charCode = 65;
for (let i = 0; i < rows; i++) {
  let row = ''

  for (let j = 0; j < cols; j++) {
    row += String.fromCharCode(charCode)
    charCode++
  }
  console.log(row)
}

// output: 
// ABCD
// EFGH
// IJKL
