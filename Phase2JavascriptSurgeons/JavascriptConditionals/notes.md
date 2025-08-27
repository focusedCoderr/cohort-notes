# Javascript

## How to write functions in Javascript:

- One way:

```javascript
function functionName(parameter) {
	console.log(`Hello World ${parameter}`);
}
```

## Defining Variables

- `let` and `const` are used to define variables

## Data Types in Javascript

- Primitive:
  - String : "Hello", 'Hello', `Hello`
  - Number : 123, 123.5
  - Boolean : true, false
  - Null : space given in the memory but nothing in it
  - Undefined : baad mein dekhenge
  - Symbol
  - BigInt </br></br>
- Non-Primitive : Non-Primitives are also called object:
  - Array
  - Object </br></br>

### Array:

#### Ways in which an array can be defined:

- let fruits = ["apple", "mango", "guava"];
- let intFruits = new Array("Avacado", "DragonFruit");

## Other things

- `typeof` - operator used to know the data type of the operand passed to it.

```javascript
const fruits = ["firstItem", "secondItem"];
const obj = {
	firstkey: "firstValue",
	secondKey: 123,
	anotherKey: true,
};
let gaurav;
console.log(typeof null); // object
console.log(typeof "Hello"); // string
console.log(typeof 123); // number
console.log(typeof true); // boolean
console.log(typeof gaurav); // undefined
console.log(typeof fruits); // object
console.log(typeof obj); // object
```

- A historically known bug of js is `typeof` operand returns data type of `null` to be an `object` .
- question: what is the data type of function: `typeof` operand returns data type of function to be "function". Come back to it when you find out why. Sir told us that there are only two data types: primitive and non-primitive. so, what is "function"?
- Javascript is an object oriented language

## Conditionals

```javascript
if (condition) {
} else {
}
```

## Loops

- `for loop`

```javascript
for(let i=0; condition; loop counter){
  //do something
}
```

buffer website for css
