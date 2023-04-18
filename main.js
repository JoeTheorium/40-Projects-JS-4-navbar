const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const close = document.querySelector('.menu-close');

menuIcon.addEventListener('click', function () {
        menu.classList.add('menu--visible');
        menuIcon.style.display = 'none'
        close.style.display = 'block'
});    
close.addEventListener('click', function () {
        menu.classList.remove('menu--visible');
        menuIcon.style.display = 'block'
        close.style.display = 'none'
});
