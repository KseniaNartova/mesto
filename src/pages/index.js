import './index.css';
import {
  buttonOpenProfile,
  nameInput,
  jobInput,
  popupProfileForm,
  popupAddCardForm,
  addCardButton,
  cardsCatalog,
  validationConfig,
} from '../utils/constants.js';
import {arrayCards} from '../utils/cards.js';


import {Card} from '../components/card.js';
import {FormValidator} from '../components/formValidator.js';
import {Section} from '../components/section.js';
import {PopupWithImage} from '../components/popupWithImage.js';
import {PopupWithForm} from '../components/popupWithForm.js'
import { UserInfo } from '../components/userInfo.js';

const popupBigCard = new PopupWithImage('.popup_type_big-image');
popupBigCard.setEventListeners();

//создать карточки
function createCard(item) {
  const card = new Card(item, '.temlate-cards', () => {
      popupBigCard.open(item.name, item.link)
  })
  const cardEl = card.generateCard()
  return cardEl
};

//отрисовка дефолтных карточек
const defaultCards = new Section ({
  items: arrayCards,
  renderer: (item) => {
    const card = createCard(item);
    defaultCards.addItem(card)
  }
}, cardsCatalog);
defaultCards.renderItems();

//отрисовка новых карточек
    const popupWithFormCard = new PopupWithForm(
      '.popup_type_cards-profile',
      (item) => {
          const cardEl = createCard({ name: item.title, link: item.link })
          defaultCards.addItem(cardEl)
          popupWithFormCard.close()
      }
  );
  popupWithFormCard.setEventListeners();

const profileUser = new UserInfo({
  userName: '.profile__title',
  userJob: '.profile__subtitle',
});

const popupWithFormProfile = new PopupWithForm(
  '.popup_type_profile',
  (item) => {
      profileUser.setUserInfo({ nameUser: item.name, jobUser: item.aboutself })
      popupWithFormProfile.close()
  }
)
popupWithFormProfile.setEventListeners();

//валидация формы профиля
const formValidationProfile = new FormValidator(validationConfig, popupProfileForm);
formValidationProfile.enableValidation();

//валидация формы карточки
const formValidationCard = new FormValidator(validationConfig, popupAddCardForm);
formValidationCard.enableValidation();

// слушатели 
addCardButton.addEventListener('click', () => {
  popupWithFormCard.open()
  formValidationCard.resetValidation();
})

buttonOpenProfile.addEventListener('click', () => {
  const { name, job } = profileUser.getUserInfo()
  nameInput.value = name;
  jobInput.value = job;
  popupWithFormProfile.open();
  formValidationProfile.resetValidation();
})


