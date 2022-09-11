import './index.css';
import {
  buttonOpenProfile,
  popupProfile,
  nameInput,
  userName,
  jobInput,
  job,
  popupProfileForm,
  popupAddCardForm,
  popupAddCard,
  addCardButton,
  cardsCatalog,
  popupAddCardTitleInput,
  popupAddCardLinkInput,
  popupBigImage,
  popupImgTitle,
  popupImg,
  popupForms,
  validationConfig,
} from '../utils/constants.js';
import {arrayCards} from '../utils/cards.js'


import {Card} from '../components/card.js';
import {FormValidator} from '../components/formValidator.js';





//Общая функция открытия попапов
function openPopup(popupClass) {
  popupClass.classList.add('popup_open');
  document.addEventListener('keydown', closePopupEsc);
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
    removeSpan();
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

popupForms.forEach((item) => {
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

addCardButton.addEventListener('click',() => {openPopup(popupAddCard); popupAddCardForm.reset(); removeSpan()});

popupAddCardForm.addEventListener('submit', addCard);





