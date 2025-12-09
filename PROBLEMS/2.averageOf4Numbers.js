/* Write a function named averageOf4Numbers that receives 4 numbers as parameters and returns the mathematical average between them. */

function averageOf4Numbers(nr1, nr2, nr3, nr4) {
  const sum = nr1 + nr2 + nr3 + nr4;
  return sum / 4;
}

console.log(averageOf4Numbers(11, 9, 33, 28));
export { averageOf4Numbers };
