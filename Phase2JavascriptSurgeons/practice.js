function checkIfFailOrPass(marks) {
	let grade = "FAIL";
	if (marks >= 90) {
		grade = "A";
	} else if (marks >= 80) {
		grade = "B";
	} else if (marks >= 70) {
		grade = "C";
	} else if (marks >= 60) {
		grade = "D";
	}
	return grade;
}

// console.log(checkIfFailOrPass(90));

const fruits = ["firstItem", "secondItem"];
const obj = {
	firstkey: "firstValue",
	secondKey: 123,
	anotherKey: true,
};
// let gaurav;
// console.log(typeof null); // object
// console.log(typeof "Hello"); // string
// console.log(typeof 123); // number
// console.log(typeof true); // boolean
// console.log(typeof gaurav); // undefined
// console.log(typeof fruits); // object
// console.log(typeof obj); // object
// console.log(typeof checkIfFailOrPass);

const teas = [
	"Green tea",
	"Black Tea",
	"Oolong Tea",
	"White tea",
	"Herbal Tea",
];
teas.push("Chamomile Tea");
// console.log(teas);

const indexofOolong = teas.indexOf("Oolong Tea");
// console.log(indexofOolong);

teas.splice(indexofOolong, 1);
// console.log(teas);

// console.log(
// 	teas.reduce((acc, curr) => (curr != "Herbal Tea" ? acc++ : acc), 0)
// );
// console.log(teas.reduce((acc, curr)=>{
// 	if(curr!="Herbal Tea"){
// 		acc++;
// 	}
// 	return acc;
// },0));

// console.log(teas.map((curr) => curr.toUpperCase()));

const initial = {
	maxCount: 0,
	item: "",
};

// console.log(
// 	teas.reduce((acc, curr) => {
// 		let lengtho = curr.length;
// 		if (lengtho > acc.maxCount) {
// 			acc.maxCount = lengtho;
// 			acc.item = curr;
// 		}
// 		return acc;
// 	}, initial)
// );

let i = 122;
// console.log(i + 100);

const person = {
	firstName: "Gaurav",
	lastName: "Yadav",
	hobbies: ["listening Sitar", "identifying perfumes", "filing RTIs"],
	isMarried: true,
	getFullName: function () {
		return "Gaurav Yadav";
	},

	address: {
		hno: 1,
		street: 1,
		countryCode: "IN",
	},
};

// console.log(person.hasPatience);

const p1 = {
	fname: "Sandesh",
};

let aname = "Gaurav";
let bname = aname;

// console.log(bname); // Gaurav
// console.log(aname); // Gaurav

bname = "Sandesh";

// console.log(bname); // Sandesh
// console.log(aname); // Gaurav

let anObject = {
	name: "Gaurav",
};

let anotherObject = anObject;

// console.log(anotherObject); // {name: "Gaurav"}
// console.log(anObject); // {name: "Gaurav"}

anotherObject.name = "Sandesh";

// console.log(anotherObject); // {name: "Sandesh"}
// console.log(anObject); // {name: "Sandesh"}

const obj1 = {
	a: 2,
	b: "b",
	c: true,
};

const obj2 = {
	...obj1,
};

const obj3 = {
	a: "A",
	b: 2,
	c: true,
	d: {
		e: "E",
		f: "F",
	},
};

// console.log(JSON.stringify(obj3));

const obj4 = { ...obj3 };

// console.log(obj1);
// console.log(obj2);
// console.log(obj3);
// console.log(obj4);

const normalTea = {
	name: "Chai",
	"type of tea": "caffeniated",
	caffeineContent: 30,
};

console.log(normalTea.name);
console.log(normalTea["type of tea"]);

normalTea.origin = "India";
normalTea.caffeineContent = "Medium";
