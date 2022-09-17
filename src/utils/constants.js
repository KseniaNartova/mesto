const buttonOpenProfile = document.querySelector('.profile__button_type_edit'); //pen image
const nameInput = document.querySelector('.popup__input_type_name'); //поле имени в попапе
const jobInput = document.querySelector('.popup__input_type_text'); //поле род занятий в попапе
const popupProfileForm = document.querySelector('.popup__container_shift_profile'); // форма профиля

//переменные для добавления карточек
const popupAddCardForm = document.querySelector('.popup__container_shift_cards'); // форма карточек
const addCardButton = document.querySelector('.profile__button_type_add'); //кнопка добавления карточек
const cardsCatalog = document.querySelector('.photo-grid__cards'); // список фото

const validationConfig = {
    formSelector: '.popup__container',
    submitButtonSelector: '.popup__button-save',
    input: '.popup__input',
    inputErrorClass: 'popup__input_type_error',
    inactiveButtonClass: 'popup__button-save_type_disabled',
  };

export {
    buttonOpenProfile,
    nameInput,
    jobInput,
    popupProfileForm,
    popupAddCardForm,
    addCardButton,
    cardsCatalog,
    validationConfig,
}  