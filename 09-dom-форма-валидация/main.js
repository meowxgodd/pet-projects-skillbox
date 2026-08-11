const form = document.querySelector('.form');
const formName = document.querySelector('.name');
const formEmail = document.querySelector('.email');
const formGender = document.querySelectorAll('input[name="radio"]');
const formServise = document.querySelector('.range');
const formInteresting = document.querySelectorAll('input[type="checkbox"]');
const formText = document.querySelector('.textarea');
const formBlockResult = document.querySelector('.formBlockResult');

form.addEventListener('submit', function (e) {
	e.preventDefault()
	renderResult()
});

function renderResult() {
	formBlockResult.innerHTML = ''

	const textName = document.createElement('p');
	textName.textContent = `Имя пользователя: ${formName.value}`

	const textEmail = document.createElement('p');
	textEmail.textContent = `Email: ${formEmail.value}`

	const textGender = document.createElement('p');
	formGender.forEach(item => {
		if (item.checked) {
			textGender.textContent = `Пол: ${item.value}`
		}
	})

	const textServise = document.createElement('p');
	textServise.textContent = `Оценка сервиса: ${formServise.value}`


	const interesting = []
	formInteresting.forEach(item => {
		if (item.checked) {
			interesting.push(item.value)
		}
	})
	const textInteresting = document.createElement('p');
	textInteresting.textContent = ` Интересы пользователя: ${interesting.join(', ')}`



	const text = document.createElement('p');
	text.textContent = `Дополнительные комментарии: ${formText.value}`

	formBlockResult.append(textName)
	formBlockResult.append(textEmail)
	formBlockResult.append(textGender)
	formBlockResult.append(textServise)
	formBlockResult.append(textInteresting)
	formBlockResult.append(text)
}

formName.addEventListener('invalid', function () {
	formName.setCustomValidity('Имя не может быть пустым')
})

formName.addEventListener('input', function () {
	formName.setCustomValidity('')
})

formEmail.addEventListener('invalid', function () {
	formEmail.setCustomValidity('Введите корректный Email')
})

formEmail.addEventListener('input', function () {
	formEmail.setCustomValidity('')
})