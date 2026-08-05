const heights = [164, 157, 160, 143, 170]

const contentEl = document.querySelector('.container')
const addBtn = document.querySelector('.addHeight')
const filterBtn = document.querySelector('.filter')

const listWrapper = document.createElement('div')
contentEl.append(listWrapper)


function renderList(arr) {
	const listEl = document.createElement('ul')
	for (let i = 0; i < arr.length; i++) {
		const liEl = document.createElement('li')
		liEl.textContent = `${i + 1}) ${arr[i]}`
		listEl.append(liEl)
	}
	listWrapper.innerHTML = ''
	listWrapper.append(listEl)

}


function addItem(arr, item) {
	return arr.push(item)
}


function filter(arr, filtItem) {
	const result = []
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] >= filtItem) {
			result.push(arr[i])
		}
	}
	return result
}


addBtn.onclick = function () {
	const newHeight = Number(prompt('Введите рост'))
	if (newHeight !== '') {
		addItem(heights, newHeight)
	} else {
		alert('Вы ничего не ввели')
	}
	renderList(heights)
}


filterBtn.onclick = function () {
	const filtHeight = Number(prompt('Введите минимальный рост'))
	const newResult = filter(heights, filtHeight)
	renderList(newResult)
}



renderList(heights)