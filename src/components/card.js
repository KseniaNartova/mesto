export class Card {
    constructor(data, templateSelector, openPopupBigCard) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._openPopupBigCard = openPopupBigCard;
    } 

    _getTemplate() {
        const cardEl = document
          .querySelector(this._templateSelector)
          .content
          .querySelector('.photo-grid__card')
          .cloneNode(true);
    
        return cardEl;
      }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
      
        const cardImage = this._element.querySelector('.photo-grid__image'); 
        cardImage.alt = this._name;
        cardImage.src = this._link;
        this._element.querySelector('.photo-grid__title').textContent = this._name;
    
        return this._element;
      }

    _likeCard() {
        this._element.querySelector('.photo-grid__like').classList.toggle('photo-grid__like_type_active');
     }

    _deleteCard() {
        this._element.remove();
    }

    _setEventListeners() {
       this._element.querySelector('.photo-grid__like').addEventListener('click', () => {
        this._likeCard();
      });

      this._element.querySelector('.photo-grid__delete-button').addEventListener('click', () => {
        this._deleteCard();
      });

      this._element.querySelector('.photo-grid__card_type_button-img').addEventListener('click', () => {
        this._openPopupBigCard(this._name, this._link);
      })
    };
};


