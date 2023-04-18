const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');

menuIcon.addEventListener('click', function (event) {
    const target = event.target;

    if (target.matches('.fa-bars')) {
        menu.classList.add('menu--visible');
        target.classList.replace('fa-bars', 'fa-times');
    } else if (target.matches('.fa-times')) {
        menu.classList.remove('menu--visible');
        target.classList.replace('fa-times', 'fa-bars');
    }
});
