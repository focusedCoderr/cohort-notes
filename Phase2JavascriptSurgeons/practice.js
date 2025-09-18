const car = {
	brandName: "Name of the brand of car",
	carName: "Name of the car",

	basicService() {
		console.log("change oil and washing");
	},
};

// const turboCars = {
// 	specialService() {
// 		console.log("Perform special service");
// 	},
// };

const carProto = Object.getPrototypeOf(car);
const turboPetrolCar = Object.create(carProto);
const turboDieselCar = Object.create(carProto);

turboPetrolCar.fuel = "Petrol";
turboDieselCar.fuel = "Diesel";

turboPetrolCar.prototype.specialService = function () {
	console.log("Perform special service based on the petrol car");
};

turboDieselCar.prototype.specialService = function () {
	console.log("Perform special service based on the diesel car");
};
