const menuButton = document.querySelector(".menu-button");
const closeButton = document.querySelector(".close");
const menu = document.querySelector('.menu')


menuButton.addEventListener('click',()=>{
    menu.classList.toggle('no-display');
})
closeButton.addEventListener('click',()=>{
    menu.classList.toggle('no-display');
})

