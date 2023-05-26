// Lodash is a utility library for JavaScript
import { pipe, compose } from "lodash";

const input = " JavaScript ";

const trim = (str) => str.trim();

const wrapInDiv = (str) => `<div>${str}</div>`;

const toLowerCase = (str) => str.toLowerCase();

// Through lodash we can simplify this
// const result = wrapInDiv(toLowerCase(trim(input)));

const transform = compose(wrapInDiv, toLowerCase, trim);
transform(input);

const transformation = pipe(trim, toLowerCase, wrapInDiv);

transformation(input);
