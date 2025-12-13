/* Write a function named getUserObject that receives 3 parameters:

a string named firstName
a string named lastName
a number named age
and returns an object representing an user, with the properties name and age.
*/

function getUserObject(firstName, lastName, age) {
  const obj = {
    age,
    name: `${firstName} ${lastName}`,
  };
  return obj;
}

console.log(getUserObject("Alice", "Smith", 51));
export { getUserObject };
