const form = document.querySelector('.form');
const nameProduct = document.querySelector('.namwProduct');
const weightProduct = document.querySelector('.weightProduct');
const distanceDeliver = document.querySelector('.distanceDeliver');
const formBtn = document.querySelector('.formBtn');
const errsBlock = document.createElement('div');
const productTable = document.querySelector('tbody')


function erros() {
	errsBlock.innerHTML = ''
	if (weightProduct.value < 0 || distanceDeliver.value < 0) {
		const errorText = document.createElement('span');
		errorText.textContent = 'Введите правильные значения для веса и расстояния'
		errorText.style.color = 'red'
		errsBlock.append(errorText)
		form.append(errsBlock)
		return false

	}
	return true
}


function renderTable() {

	const tableBlock = document.createElement('tr');
	const product = document.createElement('td');
	const weight = document.createElement('td');
	const distance = document.createElement('td');
	const result = document.createElement('td');

	const resultDelivery = (Number(weightProduct.value) * Number(distanceDeliver.value)) / 10

	product.textContent = nameProduct.value
	weight.textContent = weightProduct.value
	distance.textContent = distanceDeliver.value
	result.textContent = `${resultDelivery.toFixed(2)} руб`

	tableBlock.append(product, weight, distance, result)
	productTable.append(tableBlock)
}

form.addEventListener('submit', function (e) {
	e.preventDefault()
	const isValid = erros()
	if (isValid) {
		renderTable()
		form.reset()
	}

})