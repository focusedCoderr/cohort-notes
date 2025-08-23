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
let gaurav;
console.log(typeof null); // object
console.log(typeof "Hello"); // string
console.log(typeof 123); // number
console.log(typeof true); // boolean
console.log(typeof gaurav); // undefined
console.log(typeof fruits); // object
console.log(typeof obj); // object
console.log(typeof checkIfFailOrPass);
