const heroBlock = document.querySelector('.heroBlock');
const block = document.querySelector('.imgBlock');


function renderBlockImg(url) {
	block.innerHTML = ''
	const img = document.createElement('img');
	img.setAttribute('src', `${url}`)
	block.append(img)
}


heroBlock.addEventListener('click', function (event) {
	const srcUrl = event.target.closest('img')
	renderBlockImg(srcUrl.getAttribute('src'))
});







