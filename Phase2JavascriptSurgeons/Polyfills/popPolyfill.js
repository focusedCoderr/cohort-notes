const arr = [1, 2, 3, 4, 5];

if (!Array.prototype.myPop) {
	Array.prototype.myPop = function () {
		const result = this.length === 0 ? undefined : this[this.length - 1];
		// delete this[this.length - 1]; // do not use delete because it will leave a hole in the array
		this.length--;

		return result;
	};
}

// const lastElement = arr.pop();
const myLastElement = arr.myPop();
console.log(arr);
// console.log(lastElement);
console.log(myLastElement);
