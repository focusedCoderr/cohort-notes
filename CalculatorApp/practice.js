const input = document.getElementById("inputTag");
const decimalButton = document.getElementById("decimal");
const numbers = document.getElementsByClassName("nos");
let strToBeOperatedOn = "";
let currOperand = "";

// Event Listener of numbers

for (let i = 0; i < numbers.length; i++) {
	numbers[i].addEventListener("click", (e) => {
		let valInInput = input.value;
		let lastChar = valInInput.charAt(valInInput.length - 1);
		let isLastCharOp = checkIfOporNot(lastChar);

		if (isLastCharOp.isOp) {
			createOperand(valInInput);
			currOperand += e.innerText;
			console.log(currOperand);
		} else {
		}
	});
}

// Event Listener of Decimal Button
decimalButton.addEventListener("click", (e) => {
	let str = "";
	let afterDecimalString = addDecimal(str);
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
