/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const cards = __webpack_require__(/*! ./cards */ "./js/modules/cards.js");

function calc() {
  // calc
  const result = document.querySelector('.calculating__result span');
  let sex, height, weight, age, ratio;

  if (localStorage.getItem('sex')) {
    sex = localStorage.getItem('sex');
  } else {
    sex = 'female';
    localStorage.setItem('sex', 'female');
  }

  if (localStorage.getItem('ratio')) {
    ratio = localStorage.getItem('ratio');
  } else {
    ratio = 1.375;
    localStorage.setItem('ratio', 1.375);
  }

  function initLocalSettings(selector, activeClass) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(elem => {
      elem.classList.remove(activeClass);

      if (elem.getAttribute('id') === localStorage.getItem('sex')) {
        elem.classList.add(activeClass);
      }

      if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
        elem.classList.add(activeClass);
      }
    });
  }

  initLocalSettings('#gender div', 'calculating__choose-item_active');
  initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');

  function calcTotal() {
    if (!sex || !height || !weight || !age || !ratio) {
      result.textContent = '____';
      return;
    }

    if (sex === 'female') {
      result.textContent = Math.round((447.6 + 9.2 * weight + 3.1 * height - 4.3 * age) * ratio);
    } else {
      result.textContent = Math.round((88.36 + 13.4 * weight + 4.8 * height - 5.7 * age) * ratio);
    }
  }

  function getStaticInfomation(selector, activeClass) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(elem => {
      elem.addEventListener('click', e => {
        if (e.target.getAttribute('data-ratio')) {
          ratio = +e.target.getAttribute('data-ratio');
          localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
        } else {
          sex = e.target.getAttribute('id');
          localStorage.setItem('sex', e.target.getAttribute('id'));
        }

        elements.forEach(elem => {
          elem.classList.remove(activeClass);
        });
        e.target.classList.add(activeClass);
        calcTotal();
      });
    });
  }

  getStaticInfomation('#gender div', 'calculating__choose-item_active');
  getStaticInfomation('.calculating__choose_big div', 'calculating__choose-item_active');

  function getDynamicInformation(selector) {
    const input = document.querySelector(selector);
    input.addEventListener('input', () => {
      if (input.value.match(/\D/g)) {
        input.style.border = '1px solid red';
      } else {
        input.style.border = 'none';
      }

      switch (input.getAttribute('id')) {
        case 'height':
          height = +input.value;
          break;

        case 'weight':
          weight = +input.value;
          break;

        case 'age':
          age = +input.value;
          break;
      }

      calcTotal();
    });
  }

  getDynamicInformation('#height');
  getDynamicInformation('#weight');
  getDynamicInformation('#age');
}

/* harmony default export */ __webpack_exports__["default"] = (calc);

/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/service */ "./js/service/service.js");


function cards() {
  // Используем классы для карточек(в данном случае не используется)
  class MenuCard {
    constructor(src, alt, title, descr, price, perentSelector, ...classes) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.classes = classes;
      this.perent = document.querySelector(perentSelector);
      this.transfer = 27;
      this.chengeToUAH();
    }

    chengeToUAH() {
      this.price = this.price * this.transfer;
    }

    render() {
      const element = document.createElement('div');

      if (this.classes.length === 0) {
        this.element = 'menu__item';
        element.classList.add(this.element);
      } else {
        this.classes.forEach(className => element.classList.add(className));
      }

      element.innerHTML = ` 
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
    `;
      this.perent.append(element);
    }

  } // запрос и обработка данных с сервера 

  /*  getResourse('http://localhost:3000/menu')
  .then(data => { // деструктуризация объекта(вытаскиваеи свойcтва)
      data.forEach(({img, altimg, title, descr, price}) => {
          new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
      });
  }); */


  (0,_service_service__WEBPACK_IMPORTED_MODULE_0__.getResourse)('http://localhost:3000/menu').then(data => createCard(data));

  function createCard(data) {
    data.forEach(({
      img,
      altimg,
      title,
      descr,
      price
    }) => {
      const element = document.createElement('div');
      element.classList.add('menu__item');
      element.innerHTML = ` 
                <img src=${img} alt=${altimg}>
                <h3 class="menu__item-subtitle">${title}</h3>
                <div class="menu__item-descr">${descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${price}</span> руб./день</div>
                </div>
    `;
      document.querySelector('.menu .container').append(element);
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (cards);

/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/service */ "./js/service/service.js");



function forms(formSelector, modalTimerId) {
  // получаем формы
  const forms = document.querySelectorAll(formSelector);
  const message = {
    loading: 'img/form/spinner.svg',
    success: 'Спасибо скоро свяжемся',
    failure: 'Что-то пошло не так...'
  }; // подвязывает по формулы функция postData

  forms.forEach(item => {
    bingPostData(item);
  }); // функция для постинга данных

  function bingPostData(form) {
    // событие кнопки
    form.addEventListener('submit', e => {
      e.preventDefault(); // выводим блок с сообщениями 

      let statusMessage = document.createElement('img');
      statusMessage.src = message.loading;
      statusMessage.style.cssText = `
                    display: block;
                    margin: 0 auto;
                `; // добавленее спинера после формы 

      form.insertAdjacentElement('afterend', statusMessage); // запрос   

      /* const request = new XMLHttpRequest(); */
      // сначала метод open чтобы настроить запрос принимает метод и путь 

      /*  request.open('POST', 'server.php'); */
      // заголовок который говорит серверу что именно приходит принимает тип контента и второй заголовк
      // заголовок устанавливать не нужно при данном методе XMLHttpRequest и форм Дата
      // при отправке по json заголово нужен 'application/json'

      /*  request.setRequestHeader('Content-type', 'application/json'); */
      // создаем форм дата она формирует данные с формы. Формат ключ знаяение

      const formData = new FormData(form); // прогоняем formData в формат json

      const json = JSON.stringify(Object.fromEntries(formData.entries())); // превращаем обычный объект в json 

      /* const json = JSON.stringify(object); */
      // fetch запрос 

      (0,_service_service__WEBPACK_IMPORTED_MODULE_1__.postData)('http://localhost:3000/requests', json).then(data => {
        console.log(data);
        showThanksModal(message.success);
        statusMessage.remove();
      }).catch(() => {
        showThanksModal(message.failure);
      }).finally(() => {
        form.reset();
      }); // отправка данных принимает форм дата 

      /* request.send(json); */
      // навешивает обработчик событий, отслеживает load - конечная загрузка 

      /*   request.addEventListener('load', () => {
            // проверка на ошибки 
            if (request.status === 200) {
                console.log(request.response);
                // можно вывести пользователю позитив отправки 
                showThanksModal(message.success);
                // очистка формы 
                form.reset();
                // удаление сообщения
                    statusMassege.remove(); 
                
            } else {
                showThanksModal(message.failure);
            }
           });
          */
    });
  } // Красивое оповещение пользователя


  function showThanksModal(massage) {
    const prevModalDialog = document.querySelector('.modal__dialog');
    prevModalDialog.classList.add('hide');
    (0,_modal__WEBPACK_IMPORTED_MODULE_0__.openModal)('.modal');
    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialog');
    thanksModal.innerHTML = `
             <div class="modal__content">
                     <div data-close class="modal__close">&times;</div>
                     <div class="modal__title">${massage}</div>
             </div>
         `;
    document.querySelector('.modal').append(thanksModal);
    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.add('show');
      prevModalDialog.classList.remove('hide');
      (0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)('.modal');
    }, 4000);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeModal": function() { return /* binding */ closeModal; },
/* harmony export */   "openModal": function() { return /* binding */ openModal; }
/* harmony export */ });
function openModal(modalSelector, modalTimerId) {
  const modal = document.querySelector(modalSelector);
  modal.classList.add('show');
  modal.classList.remove('hide'); // Либо вариант с toggle - но тогда назначить класс в верстке

  document.body.style.overflow = 'hidden';

  if (modalTimerId) {
    clearInterval(modalTimerId);
  }
}

function closeModal(modalSelector) {
  const modal = document.querySelector(modalSelector);
  modal.classList.add('hide');
  modal.classList.remove('show'); // Либо вариант с toggle - но тогда назначить класс в верстке

  document.body.style.overflow = '';
}

function modal(triggerSelector, modalSelector, modalTimerId) {
  const modalTrigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector);
  modalTrigger.forEach(btn => {
    btn.addEventListener('click', () => openModal(modalSelector, modalTimerId));
  });
  modal.addEventListener('click', e => {
    if (e.target === modal || e.target.getAttribute('data-close') == '') {
      closeModal(modalSelector);
    }
  });
  document.addEventListener('keydown', e => {
    if (e.code === "Escape" && modal.classList.contains('show')) {
      closeModal(modalSelector);
    }
  });

  function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      openModal(modalSelector);
      window.removeEventListener('scroll', showModalByScroll);
    }
  }

  window.addEventListener('scroll', showModalByScroll);
}

/* harmony default export */ __webpack_exports__["default"] = (modal);


/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function slider({
  container,
  slide,
  nextArrow,
  prevArrow,
  totalCounter,
  currentCounter,
  wrapper,
  field
}) {
  // slider - простой 
  let slideIndex = 1,
      offset = 0;
  const slides = document.querySelectorAll(slide),
        prev = document.querySelector(prevArrow),
        slider = document.querySelector(container),
        next = document.querySelector(nextArrow),
        total = document.querySelector(totalCounter),
        current = document.querySelector(currentCounter),
        slidesWrapper = document.querySelector(wrapper),
        slidesInner = document.querySelector(field),
        width = window.getComputedStyle(slidesWrapper).width;

  if (slides.length < 10) {
    total.textContent = `0${slides.length}`;
  } else {
    total.textContent = slides.length;
  }

  slidesInner.style.display = 'flex';
  slidesInner.style.transition = '0.5s all';
  slidesInner.style.width = 100 * slides.length + '%';
  slidesWrapper.style.overflow = 'hidden';
  slides.forEach(slide => {
    slide.style.width = width;
  });
  slider.style.position = 'relative';
  const indicators = document.createElement('ol'),
        dots = [];
  indicators.classList.add('carousel-indicators');
  indicators.style.cssText = `
            position: absolute;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 15;
            display: flex;
            justify-content: center;
            margin-right: 15%;
            margin-left: 15%;
            list-style: none;
            `;
  slider.append(indicators);

  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('li');
    dot.setAttribute('data-slide-to', i + 1);
    dot.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 30px;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #fff;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: .5;
            transition: opacity .6s ease;
            `;

    if (i == 0) {
      dot.style.opacity = 1;
    }

    indicators.append(dot);
    dots.push(dot);
  }

  next.addEventListener('click', () => {
    if (offset == +width.replace(/\D/g, '') * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += +width.replace(/\D/g, '');
    }

    slidesInner.style.transform = `translateX(-${offset}px`;

    if (slideIndex == slides.length) {
      slideIndex = 1;
    } else {
      slideIndex++;
    }

    if (slides.length < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }

    dots.forEach(dot => dot.style.opacity = '.5');
    dots[slideIndex - 1].style.opacity = 1;
  });
  prev.addEventListener('click', () => {
    if (offset == 0) {
      offset = +width.replace(/\D/g, '') * (slides.length - 1);
    } else {
      offset -= +width.replace(/\D/g, '');
    }

    slidesInner.style.transform = `translateX(-${offset}px`;

    if (slideIndex == 1) {
      slideIndex = slides.length;
    } else {
      slideIndex--;
    }

    if (slides.length < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }

    dots.forEach(dot => dot.style.opacity = '.5');
    dots[slideIndex - 1].style.opacity = 1;
  });
  dots.forEach(dot => {
    dot.addEventListener('click', e => {
      const slideTo = e.target.getAttribute('data-slide-to');
      slideIndex = slideTo;
      offset = +width.replace(/\D/g, '') * (slideTo - 1);
      slidesInner.style.transform = `translateX(-${offset}px`;

      if (slides.length < 10) {
        current.textContent = `0${slideIndex}`;
      } else {
        current.textContent = slideIndex;
      }

      dots.forEach(dot => dot.style.opacity = '.5');
      dots[slideIndex - 1].style.opacity = 1;
    });
  }); // slider - простой 

  /*  showSlides(slideIndex);
     if (slides.length < 10) {
       total.textContent = `0${slides.length}`;
   } else {
       total.textContent = slides.length;
   }
  
   function showSlides(n) {
       if (n > slides.length) {
           slideIndex = 1;
       }
         if (n < 1) {
           slideIndex = slides.length;
       }
         slides.forEach(item => item.style.display = 'none');
         slides[slideIndex - 1].style.display = 'block';
         if (slides.length < 10) {
           current.textContent = `0${slideIndex}`;
       } else {
           current.textContent = slideIndex;
       }
     };
     function plusSlides (n) {
       showSlides(slideIndex += n);
   };
     prev.addEventListener('click', () => {
       plusSlides(-1);
   });
     next.addEventListener('click', () => {
       plusSlides(1);
   }); */
}

/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function tabs(tabsSelector, tabsContentSelector, tabsParentSeletor, activeClass) {
  // Tabs
  // получаем элементы
  const tabs = document.querySelectorAll(tabsSelector),
        tabsContent = document.querySelectorAll(tabsContentSelector),
        tabsParent = document.querySelector(tabsParentSeletor); // функция по удалению и добавлению классов

  function hideTabContent() {
    tabsContent.forEach(item => {
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
    });
    tabs.forEach(item => {
      item.classList.remove(activeClass);
    });
  }

  function showTabContent(i = 0) {
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add(activeClass);
  }

  hideTabContent();
  showTabContent();
  tabsParent.addEventListener('click', event => {
    const target = event.target;

    if (target && target.classList.contains(tabsSelector.slice(1))) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (tabs);

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function timer(id, deadline) {
  // Timer
  function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
          days = Math.floor(t / (1000 * 60 * 60 * 24)),
          hours = Math.floor(t / (1000 * 60 * 60) % 24),
          minutes = Math.floor(t / 1000 / 60 % 60),
          seconds = Math.floor(t / 1000 % 60); // возвращаем наружу 

    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
          days = document.querySelector('#days'),
          hours = document.querySelector('#hours'),
          minutes = document.querySelector('#minutes'),
          seconds = document.querySelector('#seconds'),
          timeInterval = setInterval(updateClock, 1000);
    updateClock();

    function updateClock() {
      const t = getTimeRemaining(endtime);
      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock(id, deadline);
}

/* harmony default export */ __webpack_exports__["default"] = (timer);

/***/ }),

/***/ "./js/service/service.js":
/*!*******************************!*\
  !*** ./js/service/service.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "postData": function() { return /* binding */ postData; },
/* harmony export */   "getResourse": function() { return /* binding */ getResourse; }
/* harmony export */ });
//async говорим что нутки ф буд какой- асинхроннный код
const postData = async (url, data) => {
  let res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: data
  }); // await будет ждать окончания запроса 

  return await res.json();
}; // настраиваем получение данных по запросу 


const getResourse = async url => {
  // await будет ждать окончания запроса 
  const res = await fetch(url); // проверяем на ошибки 

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status${res.status}`);
  } // await будет ждать окончания запроса 


  return await res.json();
};




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/calc */ "./js/modules/calc.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");







window.addEventListener('DOMContentLoaded', () => {
  const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 30000);
  (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_6__.default)('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
  (0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__.default)('[data-modal]', '.modal', modalTimerId);
  (0,_modules_timer__WEBPACK_IMPORTED_MODULE_1__.default)('.timer', '2021-08-31');
  (0,_modules_cards__WEBPACK_IMPORTED_MODULE_2__.default)();
  (0,_modules_calc__WEBPACK_IMPORTED_MODULE_3__.default)();
  (0,_modules_forms__WEBPACK_IMPORTED_MODULE_4__.default)('form', modalTimerId);
  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__.default)({
    container: '.offer__slider',
    nextArrow: '.offer__slider-next',
    prevArrow: '.offer__slider-prev',
    totalCounter: '#total',
    currentCounter: '#current',
    slide: '.offer__slide',
    wrapper: '.offer__slider-wrapper',
    field: '.offer__slider-inner'
  });
});

function* generator() {
  yield 'S';
  yield 'A';
  yield 'B';
}

const str = generator();
console.log(str.next());
}();
/******/ })()
;
//# sourceMappingURL=general.js.map