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

equalButton.addEventListener("click", () => {
	const valInString = inputTag.value;
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
});

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
