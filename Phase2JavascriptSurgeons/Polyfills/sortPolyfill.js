const arr = [3, 1, 32, 12, 921, 38, 134, 823, 22, 11];

if (!Array.prototype.mySort) {
	Array.prototype.mySort = function (userFn) {
		if (arguments.length === 0) {
			for (let i = 0; i < this.length - 1; i++) {
				for (let j = i + 1; j < this.length; j++) {
					let firstElement = this[i].toString();
					let secondElement = this[j].toString();
					if (firstElement > secondElement) {
						let valAtI = this[i];
						this[i] = this[j];
						this[j] = valAtI;
					}
				}
			}
		} else {
			if (typeof userFn !== "function") {
				throw new TypeError("A compare function is required to sort");
			} else {
				for (let i = 0; i < this.length - 1; i++) {
					for (let j = i + 1; j < this.length; j++) {
						let result = userFn(this[i], this[j]);
						if (result === undefined || typeof result !== "number") {
							throw new TypeError(
								"The compare function should return a number"
							);
						}
						if (result > 0) {
							let valAtI = this[i];
							this[i] = this[j];
							this[j] = valAtI;
						}
					}
				}
			}
		}

		return this;
	};
}

console.log(arr.sort());
console.log(arr.mySort());
