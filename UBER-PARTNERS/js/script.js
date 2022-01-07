window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamberger = document.querySelector('.hamberger');

    hamberger.addEventListener('click', () => {
        hamberger.classList.toggle('hamberger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamberger.classList.toggle('hamberger_active');
            menu.classList.toggle('menu_active');
        })
    })
})