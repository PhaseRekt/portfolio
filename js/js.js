var pic = document.querySelector('img')
var picTwo = document.querySelector('img + img')
var picThree = document.querySelector('img + img + img')
var picFour = document.querySelector('img + img + img + img')
var picbig = document.querySelector('.big')

pic.addEventListener('click', embiggen)
picTwo.addEventListener('click', embiggenTwo)
picThree.addEventListener('click', embiggenThree)
picFour.addEventListener('click', embiggenFour)

function embiggen() {
    pic.classList.add('big')
}

function embiggenTwo() {
    picTwo.classList.add('big')
}

function embiggenThree() {
    picThree.classList.add('big')
}

function embiggenFour() {
    picFour.classList.add('big')
}

picbig.addEventListener('click', smallify)

function smallify() {
    picbig.classList.remove('big')
}
