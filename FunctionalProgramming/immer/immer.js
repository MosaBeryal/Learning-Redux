//Immer is also a popular library for immutable

import { produce } from "immer";

let book = { title: "harry potter " };

function publish(book) {
  return produce(book, (draftBook) => {
    draftBook.isPublished = true;
  });
}
let updated = publish(book);
console.log(book);
console.log(updated);
