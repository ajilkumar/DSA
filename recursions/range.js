// Create an array with all integers within a given range

function range(start, end) {
  if (start === end) {
    return [];
  } else {
    const numbers = range(start, end - 1);
    numbers.push(end - 1);
    return numbers;
  }
}

console.log(range(0, 5));
