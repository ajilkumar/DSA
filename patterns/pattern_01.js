// let n = 4;

// for (let i = 1; i <= n; i++) {
//   // outer loop
//   let row = "";

//   for (let j = 1; j <= n; j++) {
//     // inner loop
//     row += "* ";
//   }
//   console.log(row);
// }

let rows = 4;
let cols = 4;

for (let i = 0; i < rows; i++) {
  let row = "";
  for (let j = 0; j < cols; j++) {
    row += String.fromCharCode(65 + j); // 'A' is 65
  }
  console.log(row);
}
