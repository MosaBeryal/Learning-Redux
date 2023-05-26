function sayHello() {
  return "Hello world";
}
// we can set the value of variable as a boolean , string , number and also function, (passing a reference of function)
let myFunction = sayHello;

// calling a function that will return a string store in variable
let myFunction1 = sayHello();

//Both are same both are returning the string.
myFunction();
sayHello();
