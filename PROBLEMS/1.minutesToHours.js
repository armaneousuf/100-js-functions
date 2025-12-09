/* Write a function named minutesToHours that receives a number of minutes as parameter and returns a number representing the same amount of time but in hours. */

function minutesToHours(minutes) {
  const min = minutes / 60;
  return min;
}

console.log(minutesToHours(150));

export { minutesToHours };