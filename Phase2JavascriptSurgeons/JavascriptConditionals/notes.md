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

## Data Structure in JS

- Data Structure is how you organise different types of data that you have like array, object, map, set, stack, queue, Linked List, Tree etc
- Primitive: comes out of the box in js like Array, Object, Map, Set, WeakMap, WeakSet
- Non-Primitive: We have to write implementation of these using primitive data structures as building blocks like stacks. They don't come out of the box in js. for eg: Stack, Queue, Linked List, Tree, Graph, Hash Table

### Why are Array and Object Data Type as well as Data Structure?

- If we look via the perspective of language (JS), anything that is not a primitive is an 'Object' type.
  - So, `{}` is an object type
  - and, `[]` is also an object type (an array is just a special kind of object).
- So, from language specification,

  - `typeof {}` -> "object"
  - `typeof []` -> "object"

- If we look via the perspective of computer science,
  - Array organises data in order with indices
  - Object organises data in key value pairs <br>
- So, depending upon the lens that we are looking from, they can have a dual role. <br><br><br>

### Objects:

- defined in curly braces:

```js
const person = {
  firstName: "Gaurav",
  lastName: "Yadav",
  hobbies: ["listening Sitar", "identifying perfumes", "filing RTIs"],
  isMarried: true,
  getFullName: function(){
    return this.firstName + this.lastName;
  }

  address: {
    hno:1,
    street:1,
    countryCode: "IN",

  }
}
```

#### Shallow Copy vs Deep Copy

##### Stack Memory vs Heap Memory

- Whenever variables are created, they are stored in memory. The memory model has two main parts:

  - Stack
  - Heap

- Stack:

  - Very fast to access.
  - Has limited size (can overflow).
  - Stores function calls, local variables, and references to objects in the heap.

- Heap:

  - Slower to access than stack.
  - Dynamically growable, managed by garbage collector.
  - Stores objects, arrays, and functions.

- In JavaScript:
  - Primitive values (number, string, boolean, null, undefined, symbol, bigint) are stored directly in the variable (typically on stack if standalone).
  - Non-primitive values (objects, arrays, functions) are always stored in the heap.
  - For objects/arrays, the variable itself (on the stack) holds only a reference (pointer) to the actual data in the heap.

for eg:

![My Image](./Images/6.svg)

```js
let aname = "Gaurav";
let bname = "Sandesh";
const obj = {
	a: "A",
	b: 2,
	c: true,
	d: {
		e: "E",
		f: "F",
	},
};
```

- Since `aname` and `bname` are primitive data types, they are directly stored on the stack, while in the case of obj which is a non-primitive data type, actual object is stored on the heap, let us suppose at `0x1`, so the obj variable is stored on stack and reference to the object is stored in it i.e. `0x1` .
- If we look at the `0x1` address in the heap, we can see that inside the object, the primitives, `a, b and c` are stored at `0x1` address while, the `d` key is an object, so, the `d` object is actually placed somewhere else in the heap, let us say at `0x2`, so at `0x1` heap memory, d key holds the reference to the actual `d` object i.e. `0x2`.

- why string assignment does not change and object assignment changes the data in previous object
- two types of memory - stack and heap
  if everything were to be put in heap , every data type will be growable but it will take more time to fetch it from the heap memory, in stack data types are not growable but it is quick to fetch them
- in any language if we are dealing with primitive data types like string, number, boolean, etc, they are stored in stack memory, but if we are dealing with non-primitive data types like arrays, objects etc, they are stored in heap memory, but there reference is stored in stack.

- Garbage collector
- memory leak

- Spread Operator in objects makes a shallow copy- nested copy are not copied - there address is copied
- Deep Copy
- Objects Serialization and deserialization - is it same as deep copy?
-
