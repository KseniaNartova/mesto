let openButtonProfile = document.querySelector('.profile__button'); //pen image
let popupProfile = document.querySelector('.popup_type_profile'); // всплывающее окно профиля
let nameInput = document.querySelector('.popup__input_type_name'); //поле имени в попапе
let userName = document.querySelector('.profile__title'); //имя в профайле
let jobInput = document.querySelector('.popup__input_type_text'); //поле род занятий в попапе
let job = document.querySelector('.profile__subtitle'); // род занятий в профайле
let profileButtonClose = document.querySelector('.popup__button-close_type_profile'); //кнопка закрыть профиль
let popupContainerProfile = document.querySelector('.popup__container_shift_profile'); // форма профиля

//переменные для добавления карточек
let popupContainerCards = document.querySelector('.popup__container_shift_cards'); // форма карточек
let cardsProfile = document.querySelector('.popup_type_cardsProfile'); // всплывающее окно карточек
let addButton = document.querySelector('.profile__button_type_add'); //кнопка добавления карточек
let cardsButtonClose = document.querySelector('.popup__button-close_type_add-cards'); //кнопка закрыть
let templateCards = document.querySelector('.temlate-cards').content //template карточек
let catalogCards = document.querySelector('.photo-grid__cards') // список фото
let titleInputAddCard = document.querySelector('.popup__input_type_title'); //поле названия картинки в попапе
let linkInputAddCard = document.querySelector('.popup__input_type_link'); //поле ссылки картинки в попапе
let imageCard = document.querySelector('.photo-grid__image'); // картинка карточки
let titleCard = document.querySelector('.photo-grid__title'); // название картинки

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


//открыть попап профиля и записать данные
function profileOpen() {
    nameInput.value = userName.textContent;
    jobInput.value = job.textContent;
    popupProfile.classList.add('popup_open');
}

//закрыть попап
function popupClose() {
    popupProfile.classList.remove('popup_open');
}

//сохранить новые данные профиля
function formSubmitHandler(evt) {
    evt.preventDefault();
    userName.textContent = nameInput.value;
    job.textContent = jobInput.value;
    popupClose();
}

openButtonProfile.addEventListener('click', profileOpen);
popupContainerProfile.addEventListener('submit', formSubmitHandler);
profileButtonClose.addEventListener('click', popupClose);

//открыть попап карточек
function cardsProfileOpen() {
  cardsProfile.classList.add('popup_open');
};

//закрыть попап карточек
function cardsProfileClose() {
  cardsProfile.classList.remove('popup_open');
}

addButton.addEventListener('click', cardsProfileOpen);
cardsButtonClose.addEventListener('click', cardsProfileClose);

// добавление карточек
function addCards(evt) {
  evt.preventDefault();
 const cardElement = templateCards.querySelector('.photo-grid__card').cloneNode(true); // клонируем содержимое тега template
 cardElement.querySelector('.photo-grid__image').src = linkInputAddCard.value;
 cardElement.querySelector('.photo-grid__title').textContent = titleInputAddCard.value;
 catalogCards.append(cardElement);
//  nameCard = cardElement.querySelector('.photo-grid__title').textContent;
//  linkCard =  cardElement.querySelector('.photo-grid__image').src;
 cardsProfileClose();
}

popupContainerCards.addEventListener('submit', addCards);




// function makeCards(name, link) {
//   // const cardElement = templateCards.querySelector('.photo-grid__card').cloneNode(true); // клонируем содержимое тега template
//   titleCard.textContent = name;
//   imageCard.src = link;
// };

// function copyCard(name, link) {
//   let cardsNew = makeCards(name, link);
//   catalogCards.prepend(cardsNew);
// }

// // карточки из массива
// function makeArrayCards() {
//   arrayCards.forEach(function (item) {
//   copyCard(item.name, item.link);
//   })
// }

// makeArrayCards();