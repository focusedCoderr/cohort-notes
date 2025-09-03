#### How to delete a property from the object: Interview Question

- `delete` operator is used to delete a property from the object

#### What is happening: Predict the output

```js
Function.prototype.describe = function () {
	console.log(`Function name is ${this.name}`);
};

function masalaChai() {}
function gingerChai() {}

function greet(name) {
	return `Hello ${name}`;
}

greet();

greet.describe("hitesh"); // output =>
masalaChai.describe();
```

// answer to above is in Introduction to DOM video. Although there is no need to look for answer. it is easy to understand.

- `name` is a property in every function

#### tech Jargon Strong:

```js
function add(a, b) {
	return a + b;
}
// above one is called function declaration
const substract = function (a, b) {
	return a - b;
};
// above one is called function expression
const multiply = (a, b) => a * b;
// arrow function
```

#### what is happening here and what are first class functions?

```js
function applyOperation(a, b, operation) {
	return operation(a, b);
}

const result = applyOperation(5, 4, (x, y) => x / y);
```

#### Tiffin Box Concept:

- If a function declaration is returned from a function, then all the variables of the parent function sent with the function declaration, so that whereever the function is returned to, it can use those variables as well.

```js
function createCounter() {
	let count = 0;
	return function () {
		count++;
		return count;
	};
}
//console.log(count); We cannot access count here

const counter = createCounter();
console.log(counter());
```

- In the above code, when `createCounter` returns the function declaration, then `createCounter` is the parent and it is returning its child, so it will send along the variable `count` as well, just like when a child is sent out the parent packs him a tiffin box, so that the child hgas everything that he needs for the journet, `createCounter` also packs a tiffin box in which `count` variable or any other variable that was declared in its scope is also packed.

#### IIFE : Immidiately Invoked Function Expression:

```js
(function () {
	console.log("hitesh");
})();
```
