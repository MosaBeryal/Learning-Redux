//Higher order function take function as an argument or return a new function , instead of working on string , number and boolean it works on function.

// map is an example of higher order function

let number = [1, 2, 4, 5];

number.map((number) => number * 2); // take each number and multiply by 2

//Set time out is also an example of higher order function

setTimeout(() => {
  console.log("Hello");
}, 1000);
