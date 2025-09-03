const arr = [1, 2, 3, 4, 5];
const arr2 = ["Hello", "I", "am"];
const arr3 = ["Superman"];

// const length = arr.push(22);
// const length2 = arr.push(...arr2, ...arr3);
// console.log(length);
// console.log(length2);
// console.log(arr);

if (!Array.prototype.myPush) {
	Array.prototype.myPush = function (...items) {
		let firstIndex = this.length;
		items.forEach((item) => {
			this[firstIndex] = item;
			firstIndex++;
		});

		return this.length;
	};
}

const mylength = arr.myPush();
console.log(arr);
console.log(mylength);
