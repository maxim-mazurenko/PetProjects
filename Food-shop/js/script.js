import modal from "./modules/modal";
import timer from "./modules/timer";
import cards from "./modules/cards";
import calc from "./modules/calc";
import forms from "./modules/forms";
import slider from "./modules/slider";
import tabs from "./modules/tabs";

window.addEventListener("DOMContentLoaded", () => {
  const modalTimerId = setTimeout(
    () => openModal(".modal", modalTimerId),
    30000
  );

  tabs(
    ".tabheader__item",
    ".tabcontent",
    ".tabheader__items",
    "tabheader__item_active"
  );
  modal("[data-modal]", ".modal", modalTimerId);
  timer(".timer", "2021-08-31");
  cards();
  calc();
  forms("form", modalTimerId);
  slider({
    container: ".offer__slider",
    nextArrow: ".offer__slider-next",
    prevArrow: ".offer__slider-prev",
    totalCounter: "#total",
    currentCounter: "#current",
    slide: ".offer__slide",
    wrapper: ".offer__slider-wrapper",
    field: ".offer__slider-inner",
  });
});
