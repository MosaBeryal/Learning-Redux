//We can also return a function from another function

function sayHello() {
  return function () {
    // anonymous function it does not have a name.
    return "Hello world ";
  };
}

// with the obove structure if we call the function we get a function back

let fn = sayHello();
let message = fn();

// this is a very powerful technique and it have a lot of application in real world