const number = [1, 2, 3];

// Adding

const added = [...number.slice(0, 1), 4, ...number.slice(1)];
console.log(added);

// Removing
const removing = number.filter((n) => n !== 2);
// console.log(removed)

// Updating

const updated = number.map((n) => (n === 2 ? 20 : n));
console.log(updated);
