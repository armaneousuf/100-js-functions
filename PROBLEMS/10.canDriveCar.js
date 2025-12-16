/* Write a function named canDriveCar that receives 2 parameters:

an object named user
an object named car
and returns a boolean indicating if the user can drive the car or not.

Note: anybody can drive a car if it has at least 18 years old or if the car has an engine smaller than 1000cc. */

function canDriveCar(user, car) {
  if (user.age >= 18 || car.engineSize < 1000) {
    return true;
  }
  return false;
}
console.log(
  canDriveCar(
    { age: 21, name: "John Doe" },
    { engineSize: 1200, name: "Mazda 3" }
  )
);
export { canDriveCar };
