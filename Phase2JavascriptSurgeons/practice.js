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

console.log(checkIfFailOrPass(90));
