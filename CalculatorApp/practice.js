// functionality of decimal

const decimalButton = document.getElementById("decimal");
console.log(decimalButton);

let strToBeOperatedOn = "";

let str1 = "123x";
console.log(addDecimal(str1));

decimalButton.addEventListener("click", (e) => {
	let str = "";
	let afterDecimalString = addDecimal(str);
});

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
