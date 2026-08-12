const promocodeArr = [
	{
		promocode: 'PROM10',
		gift: "Скидка 10%"
	},
	{
		promocode: 'PROM50',
		gift: "Скидка 50%"
	},
	{
		promocode: 'GIFT',
		gift: "Подарок в корзине"
	}
]

const formBlock = document.querySelector('.formBlock');
const form = document.querySelector('.form');
const formInput = document.querySelector('.formInput');
const btnForm = document.querySelector('.btnForm');


const textValidation = document.createElement('span');


function getCookie() {
	return document.cookie.split('; ').reduce((acc, item) => {
		const [name, value] = item.split('=')
		acc[name] = value
		return acc
	}, {})
}




function renderValue(value) {
	let found = false
	for (let i = 0; i < promocodeArr.length; i++) {
		const promo = promocodeArr[i].promocode
		const gift = promocodeArr[i].gift

		if (promo === value) {
			textValidation.textContent = `Промокод применен. ${gift}`
			formInput.classList.add('inputColor')
			textValidation.style.color = 'green'
			formBlock.append(textValidation)
			found = true
			break
		}


	}
	return found

}

form.addEventListener('submit', function (e) {
	e.preventDefault()
	const value = formInput.value.trim().toUpperCase()
	if (renderValue(value)) {
		document.cookie = `promocode=${value}; path=/; max-age=${60 * 60 * 24 * 30}`
	} else {
		formInput.value = ''
	}

})

const cookie = getCookie()

if (cookie.promocode) {
	formInput.value = cookie.promocode
	renderValue(cookie.promocode)
}