const heroBlock = document.querySelector('.heroBlock');

const block = document.querySelector('.block');
const list = document.createElement('ul');
block.append(list)

function renderList() {
	const itemEl = document.createElement('li');
	itemEl.textContent = 'Новый элемент списка'
	list.append(itemEl)

}

function revomeItem() {
	const hasRemove = list.lastElementChild
	if (hasRemove !== null) {
		hasRemove.remove()
	}
}

heroBlock.addEventListener('click', (e) => {
	const btn = e.target.closest('button')
	if (btn.className === 'addItem') {
		renderList()
	}
	if (btn.className === 'removeItem') {
		revomeItem()
	}

})