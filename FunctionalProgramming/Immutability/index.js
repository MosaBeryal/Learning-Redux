/* Immutablity  mean which can not be changes.
 Once we create an object it can't be changed. */

/* 
if we want to change we will have to take the copy first and then change it.
for exmaple : string in javaScript and most other programming langauges are immutable 
*/

//Now if we want change the string to uppercase then we will get a new string.
let name = "mosa";

let newName = name.toUppercase();

console.log(newName);

/* 
__ In contrast if we have an object we can change or mutate it directly.
In JavaScript, objects and arrays are mutable by default. This means that their values can be modified after they are created. You can add, remove, or update properties and elements of objects and arrays without creating a new instance.

javaScript is not a pure functional programming language , in pure functional language we can not mutate data  , But in javaScript we can mutate object and arrays directly , because javaScript was not designed to be a functional language its a multi paradigm programming language but we can still apply functional programming concepts when writing a javaScript code.
*/

let book = {};

book.title = "System Design ";


