const popupOpen = document.querySelector('.popup'); // открытие модального окна
const popupBtn = document.querySelector('#popup-btn'); // кнопка открывания
const popupClose = document.querySelector('#close-popup');
let popupArea = document.querySelector('#popup-area');

popupBtn.onclick = () => popupOpen.classList.toggle('open');

popupClose.onclick = () => {
    if (popupOpen.classList.toggle('open')) {
        popupOpen.style.display == 'none';
    }
};

popupArea.onclick = () => {
    if (popupOpen.classList.toggle('open')) {
        popupOpen.style.display == 'none';
    }
};
