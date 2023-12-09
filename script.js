const menuDiv = document.getElementById('menu-mobile')
const btnAnimar = document.getElementById('btn-hamburguer')

menuDiv.addEventListener('click', animarMenu)

function animarMenu(){
    menuDiv.classList.toggle('abrir')
    btnAnimar.classList.toggle('ativo')
}


const buttonPlanos = document.querySelector("btn-planos")
buttonPlanos.addEventListener('click', SubmitEvent)
function submit (){
    console.log("buttonPlanos")

}