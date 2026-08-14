const validator = new JustValidate('#basic_form');


validator.addField('#basic_name', [
	{
		rule: 'required',
		errorMessage: 'Введите имя'
	}
]);


validator.addField('#basic_email', [
	{
		rule: 'required',
		errorMessage: 'Введите почту'
	},

	{
		rule: 'email',
		errorMessage: 'Почта введена правильно'
	},
]);

validator.addField('#msg', [
	{
		rule: 'required',
		errorMessage: 'Введите сообщение'
	},
	{
		rule: 'minLength',
		value: 3,
		errorMessage: 'Мнимум 3 символа'
	},

	{
		rule: 'maxLength',
		value: 100,
		errorMessage: 'Максимум 100 символов'
	},
]);


validator.addField('#basic_age', [
	{
		rule: 'required',
		errorMessage: 'Введите возраст'
	},
	{
		rule: 'number',
	},
	{
		rule: 'minNumber',
		value: 18,
		errorMessage: 'Минимальный возраст 18'
	},
	{
		rule: 'maxNumber',
		value: 150,
		errorMessage: 'Максимальный возраст 150'
	},
]);

validator.onSuccess(function () {
	alert('Проверка пройдена успешно')
})