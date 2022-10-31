// const heading2 = document.querySelector('h2')
// const btn = document.querySelector('.check')
// const number = document.querySelector('.number')
// heading2.innerText = 'Jasper'

// function nameChanger (){
//     let randomNumber = Math.ceil(Math.random()*10)
//     number.textContent = randomNumber
//     // let sth = heading2.innerText === 'Guess My Number'
//     // if(sth){
//     //     heading2.innerText = 'Jasper'
//     // }else{
//     //     heading2.innerText = 'Guess My Number'
//     // }
// }
// btn.addEventListener('click',nameChanger)

// Handling Input Field
// To get data from an input field, you need to pass a .value
// let inputField = document.querySelector('.guess')
// inputField.value = 20
// console.log(typeof Number(inputField.value = 20));

const btn = document.querySelector('.check')

function logic (){
    let guessedNumber = Math.ceil(Math.random()*6)
    const message = document.querySelector('.message')
    const number = document.querySelector('.number')
    let score = document.querySelector('.score')
    const heading2 = document.querySelector('h2')
    let body = document.body.style
    number.textContent = guessedNumber
    let guess = Number(document.querySelector('.guess').value)
    if(!guess){
        message.textContent = 'Please insert a number'
    }else if(guess === guessedNumber){
        message.textContent = 'Correct guess🏆'
        body.backgroundColor = 'green'
    }else if (guess !== guessedNumber){
        message.textContent = 'Wrong guess😔'
        body.backgroundColor = 'blue'
        if(score.textContent == 0){
            score.textContent = 0
        }else{
            score.textContent--
        }
    }
    if(score.textContent == 0){
        heading2.textContent = 'Trials exceeded. click on play Again'
    }
}
btn.addEventListener('click', logic)

const refresh = document.querySelector('.reload')
function reload(){
    location.reload()
}
refresh.addEventListener('click',reload)