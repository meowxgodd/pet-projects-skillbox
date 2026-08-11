const numbers = [100, 500, 250, 750, 300]

const list = document.querySelector('.list');
const block = document.querySelector('.block');


function renderList(arr) {
	list.innerHTML = ''
	const newNambers = numbers.forEach(number => {
		const item = document.createElement('li')
		item.textContent = number
		list.append(item)
	})

}

renderList(numbers)


block.addEventListener('click', (e) => {
	const btn = e.target.closest('button')
	if (btn.className === 'max') {
		const sortMin = numbers.sort((a, b) => a - b)
		renderList(sortMin)
	}

	if (btn.className === 'min') {
		const sortMax = numbers.sort((a, b) => b - a)
		renderList(sortMax)
	}
})

