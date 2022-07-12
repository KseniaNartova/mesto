let openButtonProfile = document.querySelector('.profile__button'); //pen image
let popupProfile = document.querySelector('.popup'); // всплывающее окно
let nameInput = document.querySelector('.popup__user-name'); //поле имени в попапе
let userName = document.querySelector('.profile__title'); //имя в профайле
let jobInput = document.querySelector('.popup__metier'); //поле род занятий в попапе
let job = document.querySelector('.profile__subtitle'); // род занятий в профайле
let profileButtonClose = document.querySelector('.popup__button-close'); //кнопка закрыть
let popupContainer = document.querySelector('.popup__container'); // форма

//открыть попап профиля и записать данные
function profileOpen() {
    nameInput.value = userName.textContent;
    jobInput.value = job.textContent;
    popupProfile.classList.add('popup__open');
}

openButtonProfile.addEventListener('click', profileOpen);

//закрыть попап
function popupClose() {
    popupProfile.classList.remove('popup__open');
}

//сохранить новые данные профиля
function formSubmitHandler(evt) {
    evt.preventDefault();
    userName.textContent = nameInput.value;
    job.textContent = jobInput.value;
    popupClose();
}

popupContainer.addEventListener('submit', formSubmitHandler);
profileButtonClose.addEventListener('click', popupClose)





