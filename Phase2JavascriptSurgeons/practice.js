// const car = {
// 	brandName: "Name of the brand of car",
// 	carName: "Name of the car",

// 	basicService() {
// 		console.log("change oil and washing");
// 	},
// };

// // const turboCars = {
// // 	specialService() {
// // 		console.log("Perform special service");
// // 	},
// // };

// const carProto = Object.getPrototypeOf(car);
// const turboPetrolCar = Object.create(carProto);
// const turboDieselCar = Object.create(carProto);

// turboPetrolCar.fuel = "Petrol";
// turboDieselCar.fuel = "Diesel";

// turboPetrolCar.prototype.specialService = function () {
// 	console.log("Perform special service based on the petrol car");
// };

// turboDieselCar.prototype.specialService = function () {
// 	console.log("Perform special service based on the diesel car");
// };

// const object1 = {
// 	name: "I am obj1",
// 	description: "I will be the prototype of obj2",

// 	hello() {
// 		console.log("After setting me the prototype, obj2 will be able to call me");
// 	},
// };

// const object2 = Object.create(object1);
// console.log(`Below is object2`);
// console.log(object2);

// console.log(`Below is the prototype of object 2: `);
// console.log(Object.getPrototypeOf(object2));

// object2.hello();

// -----------------------------------------------------------------------

// function Hero(firstName, lastName) {
// 	this.firstName = firstName;
// 	this.lastName = lastName;
// }

// Hero.prototype.shoutName = function () {
// 	console.log(`My name is Mr. ${this.firstName} ${this.lastName}`);
// };

// Hero.prototype.alone = function () {
// 	console.log("I am alone in this world");
// };

// const anthony = new Hero("Anthony", "Gonsalvez");

// anthony.shoutName();
// anthony.alone();

// ------------------------------------------------------------------------

// const carIn1940 = {
// 	drive() {
// 		console.log("The driver is now driving the car");
// 	},
// };

// const carIn1970 = Object.create(carIn1940);
// carIn1970.playMusic = function () {
// 	console.log("Now you can also listen to music while driving the car");
// };

// const carIn2000 = Object.create(carIn1970);
// carIn2000.watchMovieInBackSeat = function () {
// 	console.log("Now you can watch a movie while the driver drives the car");
// };

// carIn2000.drive(); // The driver is now driving the car
// carIn2000.playMusic(); // Now you can also listen to music while driving the car
// carIn2000.watchMovieInBackSeat(); // Now you can watch a movie while the driver drives the car

// carIn1970.drive(); // The driver is now driving the car
// carIn1970.playMusic(); // Now you can also listen to music while driving the car

// carIn1940.drive(); //The driver is now driving the car

// // carIn2000.selfDrive();

// const carIn2025 = Object.create(carIn2000);

// carIn2025.drive = function () {
// 	console.log("No need of a driver. Autobots to the rescue. Sit back, relax!");
// };

// carIn2025.drive();
// -------------------------------------------------------------------------

// function Pizza(description) {
// 	this.description = description;
// }
// const aSimplePizza = new Pizza("Simple Pizza");

class Car {
	constructor(name, year) {
		this.name = name;
		this.year = year;
	}

	drive() {
		console.log("The driver is now driving the car");
	}
}

const carIn1940 = new Car("Just Car", 1940);

carIn1940.drive();

const carIn1970 = new Car();
