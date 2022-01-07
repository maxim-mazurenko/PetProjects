const btn_1 = document.querySelector('#btn_1'),
      btn_2 = document.querySelector('#btn_2'),
      btn_3 = document.querySelector('#btn_3'),
      btn_4 = document.querySelector('#btn_4'),
      btn_5 = document.querySelector('#btn_5'),
      btn_cmb = document.querySelector('#btn_comback'),
      btn_cmb_2 = document.querySelector('#btn_comback_2'),
      btn_cmb_3 = document.querySelector('#btn_comback_3'),
      btn_cmb_4 = document.querySelector('#btn_comback_4'),
      btn_cmb_5 = document.querySelector('#btn_comback_5'),
      block = document.querySelector('.block_1-btn'),
      button_1 = document.querySelector('.button_1'),
      button_2 = document.querySelector('.button_2'),
      button_3 = document.querySelector('.button_3'),
      button_4 = document.querySelector('.button_4'),
      button_5 = document.querySelector('.button_5');
      

btn_1.addEventListener('click', () => {
    block.classList.add('btn_1'),
    button_1.classList.add('active')
});
btn_cmb.addEventListener('click', () => {
    block.classList.remove('btn_1'),
    button_1.classList.remove('active')
});
btn_2.addEventListener('click', () => {
    block.classList.add('btn_1'),
    button_2.classList.add('active')
});
btn_cmb_2.addEventListener('click', () => {
    block.classList.remove('btn_1'),
    button_2.classList.remove('active')
});
btn_3.addEventListener('click', () => {
    block.classList.add('btn_1'),
    button_3.classList.add('active')
});
btn_cmb_3.addEventListener('click', () => {
    block.classList.remove('btn_1'),
    button_3.classList.remove('active')
});
btn_4.addEventListener('click', () => {
    block.classList.add('btn_1'),
    button_4.classList.add('active')
});
btn_cmb_4.addEventListener('click', () => {
    block.classList.remove('btn_1'),
    button_4.classList.remove('active')
});
btn_5.addEventListener('click', () => {
    block.classList.add('btn_1'),
    button_5.classList.add('active')
});
btn_cmb_5.addEventListener('click', () => {
    block.classList.remove('btn_1'),
    button_5.classList.remove('active')
});    