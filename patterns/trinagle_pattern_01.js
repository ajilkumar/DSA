{
  let n = 6;
  for (let i = 1; i <= n; i++) {
    //n
    let row = "* ";
    for (let j = 1; j < i; j++) {
      //i+1
      row += "* ";
    }
    console.log(row);
  }
}
// output:
// *
// * *
// * * *
// * * * *
// * * * * *
// * * * * * *

let n = 4;
for (let i = 1; i <= n; i++) {
  let row = "";

  for (let j = 1; j <= i; j++) {
    row += i;
  }

  console.log(row);
}

// output:
// 1
// 22
// 333
// 4444
