/* You're driving to a new city for a small weekend trip. Write a function named getGasolineAmount that receives 2 numbers as parameters:

the number of kilometers to your destination
average consumption of liters per 100km
The function should return the amount of gasoline needed to complete the entire round-trip. */

function getGasolineAmount(distance, consumptionPer100Km) {
  // return (distance*consumptionPer100Km)/100*2;

  // Detailed answer

  const oneWay = (distance * consumptionPer100Km) / 100;
  const roundTrip = oneWay * 2;
  return roundTrip;
}

console.log(getGasolineAmount(128, 6.4));

export { getGasolineAmount };
