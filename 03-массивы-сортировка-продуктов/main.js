const products = ['арбуз', 'банан', 'газировка', 'печень', 'конфеты']

const contentEl = document.querySelector('.container')
const addBtn = document.querySelector('.addProduct')

const listWrapper = document.createElement('div');
contentEl.append(listWrapper)

function renderList(arr) {
	const listEl = document.createElement('ul')
	for (let i = 0; i < arr.length; i++) {
		const itemEl = document.createElement('li')
		itemEl.textContent = `${i + 1}) ${arr[i]}`
		listEl.append(itemEl)
	}
	listWrapper.innerHTML = ''
	listWrapper.append(listEl)
}


// СОРТИРОВКА ПО АЛФАВИТУ ЗАПОМНИТЬ!!!
function sort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let flag = false
		for (let j = 0; j < arr.length - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j]
				arr[j] = arr[j + 1]
				arr[j + 1] = temp
				flag = true
			}
		}
		if (!flag) break
	}
	return arr
}

function addItem(arr, item) {
	return arr.push(item)
}


addBtn.onclick = function () {
	const newProduct = prompt('Введите ваш продукт')
	if (newProduct !== '') {
		addItem(products, newProduct)
		sort(products)
	} else {
		alert('Ничего не ввели')
	}
	renderList(products)
}



renderList(products)

