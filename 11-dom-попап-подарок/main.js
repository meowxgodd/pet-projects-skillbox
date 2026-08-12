const giftArr = [
  {
    title: "Скидка 20% на первую покупку в нашем магазине!",
    icon: "/11-dom-попап-подарок/1902863.svg"
  },
  {
    title: "Скидка 10% на всё!",
    icon: "/11-dom-попап-подарок/1902863.svg"
  },
  {
    title: "Подарок при первой покупке в нашем магазине!",
    icon: "/11-dom-попап-подарок/1902863.svg"
  },
  {
    title: "Бесплатная доставка для вас!",
    icon: "/11-dom-попап-подарок/1902863.svg"
  },
  {
    title: "Сегодня день больших скидок!",
    icon: "/11-dom-попап-подарок/1902863.svg"
  }
]

const body = document.querySelector('body')

const content = document.createElement('div');
const imgBlock = document.createElement('div');
imgBlock.classList.add('imgBlock')
content.append(imgBlock)
const img = document.createElement('img');

const block = document.createElement('div');
block.classList.add('block')
content.append(block)
const title = document.createElement('h1');
const btn = document.createElement('button');


btn.addEventListener('click', () => {
  content.remove()
})



function renderRandomGift() {
  body.append(content)
  content.classList.add('container')
  const random = Math.floor(Math.random() * giftArr.length)
  title.textContent = giftArr[random].title
  block.prepend(title)
  img.setAttribute('src', `${giftArr[random].icon}`)
  imgBlock.append(img)
  btn.textContent = 'Отлично!'
  block.append(btn)

}

setTimeout(() => {
  renderRandomGift()
}, 3000)

