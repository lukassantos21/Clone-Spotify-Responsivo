const menuDiv = document.getElementById('menu-mobile')
const btnAnimar = document.getElementById('btn-hamburguer')

menuDiv.addEventListener('click', animarMenu)

function animarMenu(){
    menuDiv.classList.toggle('abrir')
    btnAnimar.classList.toggle('ativo')
}