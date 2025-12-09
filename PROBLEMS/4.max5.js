/* Write a function named max5 that receives 5 numbers as parameters and returns the biggest one between them. */

function max5(nr1, nr2, nr3, nr4, nr5) {
  const arr = [nr1, nr2, nr3, nr4, nr5];
  return Math.max(...arr);
  // return Math.max(nr1, nr2, nr3, nr4, nr5);
}

console.log(max5(19, 12, 2, -31, 19.5));

export { max5 };
