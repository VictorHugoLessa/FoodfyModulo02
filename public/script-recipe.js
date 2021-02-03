const buttons = document.querySelectorAll(".button")
const infos = document.querySelectorAll(".recipe__info")

console.log(buttons)
console.log(infos)

for (let button of buttons ) {
  button.addEventListener('click', function(){
    if (button.innerHTML === 'MOSTRAR') {
      button.innerHTML = 'ESCONDER'          
    } else {
      button.innerHTML = 'MOSTRAR'
    }
  })
}

for (const button in buttons ) {
  buttons[button].addEventListener('click', function(){
    if(infos[button].classList.contains('hide')){
      infos[button].classList.remove('hide')
    } else {
      infos[button].classList.add('hide')
    }
  })
}