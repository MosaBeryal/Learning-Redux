//A function is pure when every time we call it and give same arguments and return the same result.

//Not a pure function
//Every time when we call this function it give us different result so its not pure.
function myFunction(number) {
  return number * Math.random();
}

/*
Pure functions
__ No random values 
__ No current date and time
__ we can't read or change global state like (DOM ,files , db ,etc) because it can effect the result of pure functions.

Note(We can update DOM elements and Databases , everything is not to be pure)

__ In Redux we have reducers, reducer are pure functions other function in our application can be impure    

__ No mutation of paramter because the result of pure function can be change. 
*/


//Not a pure function
function add(a) {
  return a + Math.random();
}

add(1);


//Pure function 

function add(a, b) {  
  return a + b;
}


/* 
__ Pure functions are stable, consistent, and predictable.
__ self documenting
__ cacheable
__ testable

 */