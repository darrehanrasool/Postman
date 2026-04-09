// json we can store only property not funtions ie funtion can't be serialized.
const object = {
  nameUser: "Dar Rehan Rasool",
  nationality: "indian",
  age: 1500,
  residence: "jupiter",
  demo: () => {
    console.log(`Hola from Jupiter`);
  },
};
//javascript object with method
console.log(object);
const value_1 = JSON.stringify(object);
//javascript object notation
console.log(value_1);
const value_2 = JSON.parse(value_1);
//javascript object without method
console.log(value_2);
