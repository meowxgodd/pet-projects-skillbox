const bmw = {
	name: 'Bmw',
	wheels: 4,
	doors: 4,
	isStarted: false,
	hp: 540,
}

const audi = {
	name: 'Audi',
	wheels: 4,
	doors: 2,
	isStarted: false,
	hp: 320
}

const honda = {
	name: 'Honda',
	wheels: 4,
	doors: 4,
	isStarted: false,
	hp: 280,
}

const cars = {
	bmw,
	audi,
	honda,
}

console.log(cars);



function getCar(nameCar) {
	return cars[nameCar] ? cars[nameCar] : console.log('Авто нет');
}

console.log(getCar('lexus'));

function printCarNames(obj) {
	for (const property in obj) {
		console.log(property);
	}
}

printCarNames(cars)


const haval = {
	name: 'Haval',
	hp: 198
}

function createCar(obj) {
	const newCar = {
		wheels: 4,
		doors: 4,
		isStarted: false,
	}

	return newCreateCar = { ...newCar, ...obj }


}

console.log(createCar(haval));