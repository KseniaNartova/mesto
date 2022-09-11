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
const popupForms = document.querySelectorAll('.popup');

const validationConfig = {
    formSelector: '.popup__container',
    submitButtonSelector: '.popup__button-save',
    input: '.popup__input',
    inputErrorClass: 'popup__input_type_error',
    inactiveButtonClass: 'popup__button-save_type_disabled',
  };

export {
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
}  