// Immutablejs is a javaScript library use for immutability.

// immutable.js provide a bunch of immutable data structures

//instead of using a plane object , we are going to use one of the data structure provided by immutable.js

import { Map } from "immutable";

// with this map function we can create a map or hash map thats like a regular javaScript object its a container for key value pairs , but the map object we get from this library is immutable.

let book = Map({ title: "harry potter " });

function publish(book) {
  return book.set("isPublished", true);
}
book = publish(book);
console.log(book.toJS());

// we can set an object directly or also we can't set we have to call get and set methods.
