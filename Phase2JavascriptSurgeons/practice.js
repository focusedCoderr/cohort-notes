const oneTea = {
	name: "Green Tea",
	type: "Caffeniated",
	origin: "China",
	like: false,
};

const anotherTea = {
	name: "Badam Tea",
	type: "Non-Caffeniated",
	origin: "Rewari",
	like: true,
};

const oneObject = { ...oneTea, ...anotherTea };

console.log(oneTea);
console.log(anotherTea);
console.log(oneObject);
