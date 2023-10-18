function filterEven(array) {
  return array.filter((e) => e % 2 === 0);
}

function filterOdd(array) {
  return array.filter((e) => e % 2 === 1);
}

const myArray = [1, 2, 3, 4, 5, 6, 7, 8];
const evenNumbers = filterEven(myArray);
const oddNumbers = filterOdd(myArray);

console.log("Even numbers:", evenNumbers);
console.log("Odd numbers:", oddNumbers);
