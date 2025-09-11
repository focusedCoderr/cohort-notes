const inputTag = document.getElementById("inputTag");
const numberOpButtons = document.getElementsByClassName("nosop");
const clearButton = document.getElementById("clear");
const equalButton = document.getElementById("equal");
console.log(equalButton);

for (let i = 0; i < numberOpButtons.length; i++) {
	numberOpButtons[i].addEventListener("click", (e) => {
		const val = e.target.innerText;

		displayValInInput(val);
	});
}
// Clear Button Functionality
clearButton.addEventListener("click", (e) => {
	inputTag.value = "0";
});

// Equal Button Functionality

equalButton.addEventListener("click", () => {});

// display Functionality
function displayValInInput(val) {
	const valAlreadyInInput = inputTag.value;
	let newVal;
	if (valAlreadyInInput === "0") {
		if (checkIfOporNot(val).isOp) {
			newVal = "0";
		} else {
			newVal = val;
		}
	} else {
		const lastCharInAlreadyValue = valAlreadyInInput.charAt(
			valAlreadyInInput.length - 1
		);
		if (
			checkIfOporNot(lastCharInAlreadyValue).isOp &&
			checkIfOporNot(val).isOp
		) {
			console.log("hello");
			const onePart = valAlreadyInInput.slice(0, valAlreadyInInput.length - 1);
			newVal = onePart + val;
		} else {
			newVal = valAlreadyInInput + val;
		}
	}

	inputTag.value = newVal;
}

// check whether operator or not and if multiply or divide operator
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
inputTag.addEventListener("keyup", (e) => {
	console.log(e);
});
