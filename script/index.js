import {Card} from "./card.js";
import {FormValidator} from "./formValidator.js";

const buttonOpenProfile = document.querySelector('.profile__button_type_edit'); //pen image
const popupProfile = document.querySelector('.popup_type_profile'); // всплывающее окно профиля
const nameInput = document.querySelector('.popup__input_type_name'); //поле имени в попапе
const userName = document.querySelector('.profile__title'); //имя в профайле
const jobInput = document.querySelector('.popup__input_type_text'); //поле род занятий в попапе
const job = document.querySelector('.profile__subtitle'); // род занятий в профайле
const popupProfileForm = document.querySelector('.popup__container_shift_profile'); // форма профиля


//переменные для добавления карточек
const popupAddCardForm = document.querySelector('.popup__container_shift_cards'); // форма карточек
const popupAddCard = document.querySelector('.popup_type_cards-profile'); // всплывающее окно карточек
const addCardButton = document.querySelector('.profile__button_type_add'); //кнопка добавления карточек
const cardsCatalog = document.querySelector('.photo-grid__cards') // список фото
const popupAddCardTitleInput = document.querySelector('.popup__input_type_title'); //поле названия картинки в попапе
const popupAddCardLinkInput = document.querySelector('.popup__input_type_link'); //поле ссылки картинки в попапе
const popupBigImage = document.querySelector('.popup_type_big-image'); //попап картинок
const popupImgTitle = document.querySelector('.popup__img-title'); //заголовок картинки в попапе
const popupImg = document.querySelector('.popup__img'); // картинка в попапе для картинки
const popupForm = document.querySelectorAll('.popup');

const validationConfig = {
  formSelector: '.popup__container',
  submitButtonSelector: '.popup__button-save',
  input: '.popup__input',
  inputErrorClass: 'popup__input_type_error',
  inactiveButtonClass: 'popup__button-save_type_disabled',
}

//Общая функция открытия попапов
function openPopup(popupClass) {
  popupAddCardForm.reset();
  popupClass.classList.add('popup_open');
  document.addEventListener('keydown', closePopupEsc);
  removeSpan();
};

//Общая функция закрытия попапов
function closePopup(popup) {
  popup.classList.remove('popup_open');
  document.removeEventListener('keydown', closePopupEsc);
};

//открыть попап профиля и записать данные
function fillProfileFields() {
    nameInput.value = userName.textContent;
    jobInput.value = job.textContent;
    openPopup(popupProfile);
};

//сохранить новые данные профиля
function submitProfileForm(evt) {
    evt.preventDefault();
    userName.textContent = nameInput.value;
    job.textContent = jobInput.value;
    closePopup(popupProfile);
}

// создать карточки
const createCard = (item) => {
  const card = new Card(item, '.temlate-cards', openPopupBigCard);
  const cardEl = card.generateCard();
  return cardEl
}

// функция для открытия попапа большой картинки
const openPopupBigCard = (name, link) => {
  popupImg.src = link;
  popupImg.alt = name;
  popupImgTitle.textContent = name;
  openPopup(popupBigImage);
}

function renderCard(card) {
  cardsCatalog.prepend(card);
 };

 arrayCards.forEach((item) => {
  const card = createCard(item);
  renderCard(card);

});

// добавляем новые карточки
function addCard(evt) {
  evt.preventDefault();
  const card = {
      name: popupAddCardTitleInput.value,
      link: popupAddCardLinkInput.value
  };
  const newCard = createCard(card);
  renderCard(newCard);
  closePopup(popupAddCard);
  const saveButton = popupAddCardForm.querySelector('.popup__button-save')
  saveButton.setAttribute('disabled', 'disabled');
  saveButton.classList.add('popup__button-save_type_disabled')
}

function closePopupOverlayAndCross(evt) {
  if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__button-close')) {
    closePopup(evt.currentTarget);
  }
}

popupForm.forEach((item) => {
  item.addEventListener('click', closePopupOverlayAndCross);
});


function closePopupEsc(evt) {
  if (evt.key === 'Escape') {
      const openPopup = document.querySelector('.popup_open');
      closePopup(openPopup);
  }
}

function removeSpan() {
  const error = Array.from(document.querySelectorAll('.popup__error'))
  error.forEach((error) => {
      error.textContent = ''
  })
}

//валидация формы профиля
const formValidationProfile = new FormValidator(validationConfig, popupProfileForm);
formValidationProfile.enableValidation();

//валидация формы карточки
const formValidationCard = new FormValidator(validationConfig, popupAddCardForm);
formValidationCard.enableValidation();

buttonOpenProfile.addEventListener('click', fillProfileFields);
popupProfileForm.addEventListener('submit', submitProfileForm); 

addCardButton.addEventListener('click',() => {openPopup(popupAddCard)});

popupAddCardForm.addEventListener('submit', addCard);





