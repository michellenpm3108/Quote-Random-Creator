const quoteDisplay = document.querySelector('#quote')
const button = document.querySelector('button')

const quotes = [
    'Do something today that your future self will thankyou for',
    'Dont worry, be happy!',
    'Your limitation is only your imagination'
]
const colors = ['#f7f0d0', '#e4fcd7', '#d7f6fc','#f0d7fc']

function showQuote() {
    let newNumber = Math.floor (Math.random () * quotes.length);
    let randomQuote = quotes[newNumber];
    quoteDisplay.innerHTML = randomQuote 
}
function changeColor () {
    let newNumber = Math.floor (Math.random() * colors.length);
    let randomColor = colors[newNumber];
    const background = document.querySelector ('.frame');
    background.style.backgroundColor = randomColor;
}
button.addEventListener('click', showQuote)
button.addEventListener('click',changeColor)
