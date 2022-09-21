import './index.css';
import {
  buttonOpenProfile,
  nameInput,
  jobInput,
  popupProfileForm,
  popupAddCardForm,
  buttonAddCard,
  cardsCatalog,
  validationConfig,
} from '../utils/сonstants.js';
import {arrayCards} from '../utils/сards.js';


import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import {Section} from '../components/Section.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {PopupWithForm} from '../components/PopupWithForm.js'
import { UserInfo } from '../components/UserInfo.js';

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
const cardList = new Section ({
  items: arrayCards,
  renderer: (item) => {
    const card = createCard(item);
    cardList.addItem(card)
  }
}, cardsCatalog);
cardList.renderItems();

//отрисовка новых карточек
const popupWithFormCard = new PopupWithForm(
  '.popup_type_cards-profile',
  (item) => {
    const cardEl = createCard({ name: item.title, link: item.link })
    cardList.addItem(cardEl)
    popupWithFormCard.close()
});
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
buttonAddCard.addEventListener('click', () => {
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


