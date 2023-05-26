// we can also pass a function as an argument to another function 
function sayHello()
{
    return "Hello world"
}

function greet(fnmessage)
{
    console.log(fnmessage()) //we call this 
}

greet(sayHello) // we can also pass a function as an argument to another function

