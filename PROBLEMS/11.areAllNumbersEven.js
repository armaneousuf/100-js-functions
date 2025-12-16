/* Write a function named areAllNumbersEven that receives an Array of numbers as parameter, and returns a boolean indicating if all the numbers are even or not. */

function areAllNumbersEven(numbers) {
  let even = [];
  for (const number of numbers) {
    // console.log(number);
    if (number % 2 !== 0) {
      // console.log(number)
      // even.push(number);
      return false;
    }
  }
  return true;
}

console.log(areAllNumbersEven([4, 6, -8, 14]));
console.log(areAllNumbersEven([12, 22, 1, 40]));
export { areAllNumbersEven };

