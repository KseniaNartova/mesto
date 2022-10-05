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
  popupAvatarForm,
  buttonOpenAvatarProfile,
} from '../utils/constants.js';


import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import {Section} from '../components/Section.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {PopupWithForm} from '../components/PopupWithForm.js'
import { UserInfo } from '../components/UserInfo.js';
import { Api } from '../components/Api.js';
import { PopupWithAvatar } from '../components/PopupWithAvatar.js';
import { PopupWithDeleteCard } from '../components/PopupWithDeleteCard.js';

const api = new Api({
    url: "https://mesto.nomoreparties.co/v1/cohort-51/",
    headers: {
        authorization: "2828649d-c727-4213-9471-433d3a2fcadf",
        "content-Type": "application/json",
    }
})


const popupBigCard = new PopupWithImage('.popup_type_big-image');
popupBigCard.setEventListeners();

const profileUser = new UserInfo({
  userName: '.profile__title',
  userJob: '.profile__subtitle',
  userAvatar: '.profile__avatar',
});
const idUser = {};

const cardList = new Section({
  renderer: (item) => {
      const cardEl = createCard(item)
      cardList.addItem(cardEl)
  }
}, cardsCatalog);

Promise.all([api.getUserInfo(), api.getCards()])
    .then(([userApiData, cardsData]) => {
      idUser._id = userApiData._id;
      cardList.renderItems(cardsData.reverse())
      profileUser.setUserInfo({ nameUser: userApiData.name, jobUser: userApiData.about, avatarUser: userApiData.avatar });
    })
    .catch((err) => {
        console.log(err);
    });

const popupWithDeleteCard = new PopupWithDeleteCard('.popup_type_delete-card');

// функция удаления карточки
const deleteCard = (idUser, cardData) => {
    popupWithDeleteCard.open();
    popupWithDeleteCard.apiData(() => {
        api.deleteСard(idUser)
            .then(() => {
                popupWithDeleteCard.close();
                cardData.deleteCard();
            })
            .catch((err) => { 
                console.log(err) })
    })
}

//создать карточки
function createCard(item) {
  const card = new Card({name: item.name, link: item.link, id: item._id, likes: item.likes, owner: item.owner._id,},
      '.temlate-cards',

      () => {
        popupBigCard.open(item.name, item.link)
      },

      idUser,

      () => {
        api.addLike(item._id)
            .then((res) => {
                card.likeLenght({
                    length: res.likes.length,
                    likes: res.likes
                });
                card.likeCard();
            })
            .catch((err) => { 
                console.log(err) })
      },

      () => deleteCard(item._id, card),

      () => {
        api.deleteLike(item._id)
          .then((res) => {
            card.likeLenght({
                length: res.likes.length,
                likes: res.likes
            });
            card.likeCard();
        })
          .catch((err) => { 
            console.log(err) })
    })
  const cardEl = card.generateCard()
  return cardEl
}

const popupWithFormProfile = new PopupWithForm(
  '.popup_type_profile',
  (item) => {
      api.editProfileUser(item)
          .then((res) => {
              popupWithFormProfile.close()
              profileUser.setUserInfo({ nameUser: res.name, jobUser: res.about, avatarUser: res.avatar });
          })
          .catch((err) => { 
            console.log(err) })
          .finally(() => {
            popupWithFormProfile.renderLoading(false);

          });
  })

const popupWithFormCard = new PopupWithForm(
  '.popup_type_cards-profile',
  (item) => {
      api.addNewCard(item)
          .then((res) => {
              popupWithFormCard.close()
              const cardEl = createCard(res);
              cardList.addItem(cardEl);
          })
          .catch((err) => { 
            console.log(err) })
          .finally(() => {
              popupWithFormCard.renderLoading(false);
          })
    });

const popupWithAvatar = new PopupWithAvatar('.popup_type_avatar', (link) => {
  api.changeAvatar(link.linkAvatar)
      .then((res) => {
          popupWithAvatar.close();
          profileUser.setAvatar({ avatarUser: res.avatar });
      })
      .catch((err) => { 
        console.log(err) })
      .finally(() => {
        popupWithAvatar.renderLoading(false);
      });
});

//валидация формы профиля
const formValidationProfile = new FormValidator(validationConfig, popupProfileForm);
formValidationProfile.enableValidation();

//валидация формы карточки
const formValidationCard = new FormValidator(validationConfig, popupAddCardForm);
formValidationCard.enableValidation();

//валидация формы аватара
const formValidationAvatar = new FormValidator(validationConfig, popupAvatarForm);
formValidationAvatar.enableValidation();

popupWithFormProfile.setEventListeners();
popupWithFormCard.setEventListeners();
popupWithDeleteCard.setEventListeners();
popupWithAvatar.setEventListeners();

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

buttonOpenAvatarProfile.addEventListener('click', () => {
  popupWithAvatar.open()
})





