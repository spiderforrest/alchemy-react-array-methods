# React Spotlight DS&A Array Methods

## Getting Started

- Use this repo as a template and save it to your own github
- run `npm install` following by `npm run test:watch`
- as you get tests passing by updating the code in index.js, remove the `.skip` in the test file (test/index.test.js) one at a time to reveal the next failing test

## [Array.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

We use `.map` all the time in React because we want to create a list of JSX elements for our React component to render. `.map` loops through each item in an array and creates a _new_ array containing the return value of the callback.

```js
const nums = [1, 2, 3, 4, 5];
const doubles = nums.map((num) => num * 2);
```

Remember this works because arrow functions automatically return. The above is the equivalent of this:

```js
const doubles = nums.map((num) => {
  return num * 2;
});
```

You HAVE to return something from the callback function in `.map` otherwise you can end up with

```js
[undefined, undefined, undefined];
```

## [Array.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

the `.filter` method runs the callback on each element and adds the element to the new array if the callback returns a _truthy_ value.

```js
const nums = [0, 1, 2, 3];
const filtered = nums.filter((num) => num); // [1, 2, 3]

const bools = [true, false, true, false, true];
const filtered = bools.filter((bool) => bool); // [true, true, true]

const fruits = ['Apple', 'Banana', 'Coconut'];
const filtered = fruits.filter((fruit) => fruit[0] === 'A'); // ['Apple]

const countries = ['United States', 'United Kingdom', 'Tunisia'];
const filtered = countries.filter((c) => c.includes('uni')); // ['Tunisia']
const moreFiltered = countries.filter((c) => c.toLowerCase().includes('uni')); // ['United States', 'United Kingdom', 'Tunisia']
```

## [Array.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

This one I find the hardest to get my brain around. Lets think about a common scenario -- wanting to sum up an array of numbers. A very reasonable solution is the following:

```js
const nums = [1, 2, 3, 4];
let sum = 0;
nums.forEach((num) => (sum += num));
console.log(sum);
```

It turns out this is a common enough pattern, that the JS folks made us a method for it.

```js
const nums = [1, 2, 3, 4];
const sum = nums.reduce((acc, num) => (acc += num), 0);
console.log(sum);
```

The `.reduce` callback takes 2 arguments -- an accumulator and the current value in the array -- you can then modify the accumulator and the updated value will get passed to the next callback iteration.

The second argument to the reduce function (NOT the callback) is the initial value of the accumulator.
