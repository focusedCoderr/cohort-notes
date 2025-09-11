const input = document.getElementById("inputTag");
const totalString = document.getElementById("totalString");
const decimalButton = document.getElementById("decimal");
const numbers = document.getElementsByClassName("nos");
const opButtons = document.getElementsByClassName("op");
const plusMinusButton = document.getElementById("plusOrMinus");
const clearButton = document.getElementById("clear");
const delButton = document.getElementById("del");
const equalButton = document.getElementById("equal");

let strToBeOperatedOn = "";
let currOperand = "0";
display();

// Event Listener for equal Button

equalButton.addEventListener("click", () => {
	const lastChar = currOperand.charAt(currOperand.length - 1);
	if (checkIfOporNot(lastChar).isOp) {
		currOperand = currOperand.substring(0, currOperand.length - 1);
	}
	strToBeOperatedOn += currOperand;

	console.log(strToBeOperatedOn);

	currOperand = "0";
	calculate();
});

function calculate() {
	const valInString = strToBeOperatedOn;
	console.log(valInString);

	const calArr = [];
	let finalVal = 0;

	let startIndex = 0;
	for (let i = 0; i < valInString.length; i++) {
		const currChar = valInString.charAt(i);
		console.log(currChar);

		const opOrNotObj = checkIfOporNot(currChar);
		console.log(opOrNotObj);

		if (opOrNotObj.isOp) {
			const num = Number(valInString.substring(startIndex, i));
			startIndex = i + 1;
			calArr.push(num);
			calArr.push(opOrNotObj);
		} else if (i === valInString.length - 1) {
			calArr.push(Number(valInString[i]));
		}
	}
	console.log(calArr);

	if (calArr.length === 1 || calArr.length === 2) {
		finalVal = calArr[0];
		console.log(finalVal);

		//send this value for display and break
	}

	const DivMulDoneArr = [];

	for (let i = 0; i < calArr.length; i = i + 1) {
		if (calArr[i].isOp && i !== calArr.length - 1) {
			if (calArr[i].isMul) {
				let popRes = DivMulDoneArr.pop();
				let mulResult = popRes * calArr[i + 1];
				DivMulDoneArr.push(mulResult);
				i++;
			} else if (calArr[i].isDiv) {
				let popRes = DivMulDoneArr.pop();
				let divResult = popRes / calArr[i + 1];
				DivMulDoneArr.push(divResult);
				i++;
			} else {
				DivMulDoneArr.push(calArr[i]);
			}
		} else {
			DivMulDoneArr.push(calArr[i]);
		}
	}
	console.log(DivMulDoneArr);
	finalVal = DivMulDoneArr[0];
	for (let i = 1; i < DivMulDoneArr.length; i++) {
		if (DivMulDoneArr[i].isOp) {
			if (DivMulDoneArr[i].isAdd) {
				finalVal = finalVal + DivMulDoneArr[i + 1];
				i++;
			} else if (DivMulDoneArr[i].isSub) {
				finalVal = finalVal - DivMulDoneArr[i + 1];
				i++;
			}
		}
	}
	console.log(finalVal);
}

function calculate2() {
	const calArr = [];
	let startIndex = 0;
	for (let i = 0; i < strToBeOperatedOn.length; i++) {
		const currChar = strToBeOperatedOn.charAt(i);
		const opOrNotObj = checkIfOporNot(currChar);
		if (opOrNotObj.isOp) {
			let numstring = strToBeOperatedOn.substring(startIndex, i);
			startIndex = i + 1;
			calArr.push(numstring);
			calArr.push(opOrNotObj);
		}
		if (currChar === "(") {
			let negNum = "";
			for (let j = i + 1; strToBeOperatedOn.charAt(j) !== ")"; j++) {
				negNum += strToBeOperatedOn.charAt(j);
				i++;
			}
			i++;
			calArr.push(negNum);
		}
	}
}
// Event Listener for delete Button

delButton.addEventListener("click", () => {
	currOperand = currOperand.substring(0, currOperand.length - 1);
	if (currOperand === "") {
		currOperand = "0";
	}
	display();
});

// Event Listener for clearButton

clearButton.addEventListener("click", () => {
	strToBeOperatedOn = "";
	currOperand = "0";
	display();
});

// Event Listener for plusMinus Button

plusMinusButton.addEventListener("click", (e) => {
	const lastChar = currOperand.charAt(currOperand.length - 1);

	if (!checkIfOporNot(lastChar).isOp && currOperand !== "0") {
		currOperand = "(-" + currOperand + ")";
		display();
	}
});

// Event listener of op buttons

for (let i = 0; i < opButtons.length; i++) {
	opButtons[i].addEventListener("click", (e) => {
		const opPressed = e.target.innerText;
		addOp(opPressed);
	});
}

// Functionality of op buttons

function addOp(opPressed) {
	const lastChar = currOperand.charAt(currOperand.length - 1);
	if (checkIfOporNot(lastChar).isOp) {
		let substring = currOperand.substring(0, currOperand.length - 1);
		substring += opPressed;
		currOperand = substring;
		display();
	} else {
		currOperand += opPressed;
		display();
	}
}

// Event Listener of numbers

for (let i = 0; i < numbers.length; i++) {
	numbers[i].addEventListener("click", (e) => {
		let numPressed = e.target.innerText;
		addNumInOperand(numPressed);
	});
}

// Functionality of number pressed
function addNumInOperand(numPressed) {
	const lastChar = currOperand.charAt(currOperand.length - 1);

	if (currOperand === "0") {
		currOperand = numPressed;
		display();
	} else if (checkIfOporNot(lastChar).isOp) {
		strToBeOperatedOn += currOperand;
		currOperand = "" + numPressed;
		display();
	} else {
		currOperand += numPressed;
		display();
	}
}

// Event Listener of Decimal Button
decimalButton.addEventListener("click", (e) => {
	const lastChar = currOperand.charAt(currOperand.length - 1);

	// addDecimal(str);
	if (currOperand === "0") {
		currOperand += ".";
	} else if (checkIfOporNot(lastChar).isOp) {
		strToBeOperatedOn += currOperand;
		currOperand = "0.";
	} else if (currOperand.includes(".")) {
		currOperand = currOperand;
	} else {
		currOperand += ".";
	}
});

// functionality of decimal

function addDecimal(str) {
	if (str.length === 1 && str === "0") {
		return "0.";
	}

	let lastChar = str.charAt(str.length - 1);
	if (checkIfOporNot(lastChar).isOp) {
		createOperand(str);
		return "0.";
	} else if (str.includes(".")) {
		return str;
	} else {
		return str + ".";
	}
}

// Check Operation or Not Functionality
function checkIfOporNot(char) {
	const arr = ["+", "-", "x", "/"];
	const retObj = {
		isOp: false,
		which: "",
		isMul: false,
		isDiv: false,
		isAdd: false,
		isSub: false,
	};
	for (let i = 0; i < arr.length; i++) {
		if (char === arr[i]) {
			retObj.isOp = true;
			retObj.which = char;
			if (char === "x") {
				retObj.isMul = true;
			} else if (char === "/") {
				retObj.isDiv = true;
			} else if (char === "+") {
				retObj.isAdd = true;
			} else {
				retObj.isSub = true;
			}
			break;
		}
	}
	return retObj;
}

function createOperand(str) {
	// whenever op is encountered, will take all chars
	// before op including op and add to the strToBeOperatedOn
}

function display() {
	input.value = currOperand;
	totalString.value = strToBeOperatedOn;
}
