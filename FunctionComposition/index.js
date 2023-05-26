// In functional programming we decompose a function into small functions and then we can make more complex function.

const input = " JavaScript ";

const trim = (str) => str.trim();

const wrapInDiv = (str) => `<div>${str}</div>`;

const toLowerCase = (str = str.toLowerCase());

const result = wrapInDiv(toLowerCase(trim(input)));
