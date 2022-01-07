const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close'),
      overlay = document.querySelector('.menu__overlay'),
      link = document.querySelector('.menu__list');

hamburger.addEventListener('click', () => {
    menu.classList.add('active')
});
closeElem.addEventListener('click', () => {
    menu.classList.remove('active')
});
overlay.addEventListener('click', () => {
    menu.classList.remove('active')
});
link.addEventListener('click', () => {
    menu.classList.remove('active')
});

const counters = document.querySelectorAll('.skills_progress-subtitle'),
      lines = document.querySelectorAll('.skills__progress-rectangle-band-active');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});

$(document).ready(function(){
        $("#menu, #pageup").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),
    //узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1500);
    });
});
$(window).scroll(function(){
    if ($(this).scrollTop() > 1600) {
        $('.pageup').fadeIn();
    }
    else {
        $('.pageup').fadeOut();
    }
});
    
