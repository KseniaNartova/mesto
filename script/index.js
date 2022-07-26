const openButtonProfile = document.querySelector('.profile__button_type_edit'); //pen image
const popupProfile = document.querySelector('.popup_type_profile'); // всплывающее окно профиля
const nameInput = document.querySelector('.popup__input_type_name'); //поле имени в попапе
const userName = document.querySelector('.profile__title'); //имя в профайле
const jobInput = document.querySelector('.popup__input_type_text'); //поле род занятий в попапе
const job = document.querySelector('.profile__subtitle'); // род занятий в профайле
const closeProfilePopup = document.querySelector('.popup__button-close_type_profile'); //кнопка закрыть профиль
const popupProfileForm = document.querySelector('.popup__container_shift_profile'); // форма профиля

//переменные для добавления карточек
const popupAddCardForm = document.querySelector('.popup__container_shift_cards'); // форма карточек
const popupAddCard = document.querySelector('.popup_type_cards-profile'); // всплывающее окно карточек
const addCardButton = document.querySelector('.profile__button_type_add'); //кнопка добавления карточек
const buttonCloseAddCards = document.querySelector('.popup__button-close_type_add-cards'); //кнопка закрыть
const templateCard = document.querySelector('.temlate-cards').content //template карточек
const cardsCatalog = document.querySelector('.photo-grid__cards') // список фото
const popupAddCardTitleInput = document.querySelector('.popup__input_type_title'); //поле названия картинки в попапе
const popupAddCardLinkInput = document.querySelector('.popup__input_type_link'); //поле ссылки картинки в попапе
const cardTitle = document.querySelector('.photo-grid__title'); // название картинки
const closeImgPopup = document.querySelector('.popup__button-close_type_close-img'); //кнопка закрытия попапа картинки
const popupBigImage = document.querySelector('.popup_type_big-image'); //попап картинок
const popupImgTitle = document.querySelector('.popup__img-title'); //заголовок картинки в попапе
const buttonImgCard = document.querySelector('.photo-grid__card_type_button-img'); //
const popupImg = document.querySelector('.popup__img'); // картинка в попапе для картинки
const temlateCards = templateCard.querySelector('.photo-grid__card');

//массив карточек
  const arrayCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

//Общая функция открытия попапов
function openPopup(popupClass) {
  popupClass.classList.add('popup_open');
};

//Общая функция закрытия попапов
function closePopup(popup) {
  popup.classList.remove('popup_open');
};

//открыть попап профиля и записать данные
function addFirstName() {
    nameInput.value = userName.textContent;
    jobInput.value = job.textContent;
    openPopup(popupProfile);
};

//сохранить новые данные профиля
function formSubmitHandler(evt) {
    evt.preventDefault();
    userName.textContent = nameInput.value;
    job.textContent = jobInput.value;
    closePopup(popupProfile);
}

openButtonProfile.addEventListener('click', addFirstName);
popupProfileForm.addEventListener('submit', formSubmitHandler); 
closeProfilePopup.addEventListener('click', () => closePopup(popupProfile));


// создать карточки
function createCard(name, link) {
  const cardEl = temlateCards.cloneNode(true); // клонируем содержимое template
  const cardImage = cardEl.querySelector('.photo-grid__image'); // картинка карточки
  cardEl.querySelector('.photo-grid__title').textContent = name;
  cardImage.src = link;
  cardImage.alt = name;
  cardEl.querySelector('.photo-grid__like').addEventListener('click', likeCard);
  cardEl.querySelector('.photo-grid__delete-button').addEventListener('click', deleteCard);
  function likeCard() {
    cardEl.querySelector('.photo-grid__like').classList.toggle('photo-grid__like_type_active');
}
  function deleteCard() {
    cardEl.remove();
}
cardEl.querySelector('.photo-grid__card_type_button-img').addEventListener('click', function() {
  popupImg.src = link;
  popupImg.alt = name;
  popupImgTitle.textContent = name;
  openPopup(popupBigImage);
})
  return cardEl;
};

// добавление карточек

function addCard(evt) {
  evt.preventDefault();
  const cardLink = popupAddCardLinkInput.value;
  const cardName = popupAddCardTitleInput.value;
  renderCard(cardName, cardLink);
  closePopup(popupAddCard);
};

function renderCard(name, link) {
  const cardStart = createCard(name, link);
  cardsCatalog.prepend(cardStart);
 }

//стартовые карточки

arrayCards.forEach(function(item) {
  renderCard(item.name, item.link) 
});

addCardButton.addEventListener('click',() => openPopup(popupAddCard));
buttonCloseAddCards.addEventListener('click', () => closePopup(popupAddCard));

popupAddCardForm.addEventListener('submit', addCard);

closeImgPopup.addEventListener('click', () => closePopup(popupBigImage));


