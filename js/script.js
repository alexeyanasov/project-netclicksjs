// меню

const leftMenu = document.querySelector('.left-menu');
const hamburger = document.querySelector('.hamburger');

// открытие/закрытие окна

hamburger.addEventListener('click', () =>{
    leftMenu.classList.toggle('openMenu');
    hamburger.classList.toggle('open');
});

document.addEventListener('click', (event) => {

    // закрывает окно при нажатии вне меню
    if(!event.target.closest('.left-menu')){
        leftMenu.classList.remove('openMenu');
        hamburger.classList.remove('open');
    }
})

leftMenu.addEventListener('click', event => {
    const target = event.target;
    const dropdown = target.closest('.dropdown');
    if(dropdown){
        dropdown.classList.toggle('active');
        leftMenu.classList.add('openMenu');
        hamburger.classList.add('open');
    }
})

