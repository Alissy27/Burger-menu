/*const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}
}*/

const navMainMenu = document.querySelector('.nav__links__main__menu');
const closedMenu = document.querySelector('.closedMenu');
const openedMenu = document.querySelector('.openedMenu');
const menu_items = document.querySelectorAll('.nav__link__main__menu a:last-of-type');

openedMenu.addEventListener('click',show);
closedMenu.addEventListener('click',close);

menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    navMainMenu.style.display = 'flex';
    navMainMenu.style.top = '0';
}

function close(){
    navMainMenu.style.top = '-100%';
}