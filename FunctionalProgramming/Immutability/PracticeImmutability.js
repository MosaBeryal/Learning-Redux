// we are not going to change the object directly first we are going to create a copy then we will change the object , there are two ways to do it in javaScript one way is to use object.assign() method , with this method we can copy content of object to another object.

// Example

const person = { name: "John" };

const updated = Object.assign({}, person, { name: "Bob ", age: 30 }); // copy all content of person object to the empty array in method and the third empty object is optional when we want to change the content, and this object return a new object.

//object.assign is one way to solve this problem but there is a better way we cn use spread operator.

// const person1 = { name: "John" };
// const updated1 = { ...person, name: "Bob ", age: 30 };
// spread operator is a syntax sugar for Object.assign() method.
// Object.assign() method is deprecated in ES6.
// spread operator is more preferable its concise.

// How to copy nested objects
let person2 = {
  name: "mosa",
  age: 25,
  address: {
    city: "karachi",
    country: "pakistan",
  },
};

// if we want to change the city of student object we will have to copy the address object first then we will change the city property of address object
let updated2 = {
  ...person2,
  name: "iqbal",
  address: {
    ...person2.address, // thats how we do a deep copy of nested objects

    city: "Swat",
  },
  age: 26,
};
console.log(updated2);
