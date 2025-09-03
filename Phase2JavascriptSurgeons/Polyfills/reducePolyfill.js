const arr = [2, 67, 34, 6556, 232, 454, 982, 5434];
const arr2 = [];

if (!Array.prototype.myReduce) {
	Array.prototype.myReduce = function (userFn, initialValue) {
		if (typeof userFn !== "function") {
			throw new TypeError(`${userFn} is not a function`);
		}

		let acc;
		let i;
		if (arguments.length > 1) {
			acc = initialValue;
			i = 0;
		} else {
			if (this.length == 0) {
				throw new TypeError(
					"Cannot use reduce on empty array with no initial value"
				);
			}
			acc = this[0];
			i = 1;
		}

		for (i; i < this.length; i++) {
			acc = userFn(acc, this[i], i, this);
		}

		return acc;
	};
}

// const redResult = arr.reduce((acc, curr) => acc + curr, 0);
const myReduceResult = arr2.myReduce((acc, curr) => acc + curr);
// console.log(redResult);
console.log(myReduceResult);
