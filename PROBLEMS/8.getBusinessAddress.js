/* Write a function named getBusinessAddress that receives an Object representing a business as a parameter, and returns a string representation of the it's address.

Example 1
Input
business

=
{…}
address: { number: 3, street: "Avenuepark", zipCode: 123500 }
name: "100 Functions ltd."
<prototype>: Object */

function getBusinessAddress(business) {
  return `${business.address.street}, number ${business.address.number}, ${business.address.zipCode}`;
}

const data = {
  address: { number: 3, zipCode: 123500, street: "Avenuepark" },
  name: "100 Functions ltd.",
};
console.log(getBusinessAddress(data));

export { getBusinessAddress };
