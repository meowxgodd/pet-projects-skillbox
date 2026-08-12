const promocodeObj = {
	promocode: "PROM50",
	gift: "Скидка 50%"
}

const formBlock = document.querySelector('.formBlock');
const form = document.querySelector('.form');
const formInput = document.querySelector('.formInput');
const btnForm = document.querySelector('.btnForm');
const valuePromo = document.createElement('span');

const { promocode, gift } = promocodeObj


function getCookie() {
	return document.cookie.split('; ').reduce((acc, item) => {
		const [name, value] = item.split('=')
		acc[name] = value
		return acc
	}, {})
}


function renderPromo(value) {
	formInput.value = value
	valuePromo.textContent = `Промокод применен. ${gift}`
	valuePromo.style.color = 'green'
	formInput.classList.add('inputColor')
	formBlock.append(valuePromo)
}




form.addEventListener('submit', function (e) {
	e.preventDefault()
	const value = formInput.value.trim().toUpperCase()
	if (value === promocode) {
		document.cookie = `promocode=${value}; path=/; max-age=${60 * 60 * 24 * 30}`
		renderPromo(value)
	} else {
		formInput.value = ''
	}

})

const cookie = getCookie()

if (cookie.promocode === promocode) {
	renderPromo(cookie.promocode)
}

