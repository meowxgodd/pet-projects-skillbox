const books = ['Мастер и Маргарита', 'Гарри Поттер', 'Над пропостью во ржи', 'Властилин колец', 'Дюна', 'Отцы и дети']


const contentEl = document.querySelector('.container')
const addBtn = document.querySelector('.addBook')
const searchBtn = document.querySelector('.search')
const listWrapperEl = document.createElement('div');
contentEl.append(listWrapperEl)


function find(arr, search) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === search) {
			return i
		}
	}
	return -1
}


function renderList(arr) {
	const listEl = document.createElement('ul')

	for (let i = 0; i < arr.length; i++) {
		const liEl = document.createElement('li')
		liEl.textContent = `${i + 1}: ${arr[i]}`
		listEl.append(liEl)
	}
	listWrapperEl.innerHTML = ''
	listWrapperEl.append(listEl)


}


function addItem(arr, element) {
	return arr.push(element)

}


addBtn.onclick = function ()  {
	const newItem = prompt('Введите название книги чтобы ее добавть')

	if (newItem !== '') {
		addItem(books, newItem)

	} else {
		alert('Вы ничего не ввели попробуйте еще раз')
	}
	renderList(books)
}


searchBtn.onclick = function () {
	const search = prompt('Какую книгу хотите найти')
	const searchIndex = find(books, search)
	if (searchIndex > -1) {
		document.querySelector(`li:nth-child(${searchIndex + 1})`).style.color = 'red'
	} else {
		alert('Книга не найдена')
	}

}


renderList(books)






