export class Card {
      constructor(data, templateSelector, openPopupBigCard, idUser, handleLikeCard, handleDeleteCard, handleDeleteLike) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._openPopupBigCard = openPopupBigCard;
        this._myId = idUser._id;
        this._handleLikeCard = handleLikeCard;
        this._handleDeleteCard = handleDeleteCard;
        this._handleDeleteLike = handleDeleteLike;
        this._likes = data.likes;
        this._ownerId = data.owner;
        this._cardId = data.id;
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
        
        const cardImage = this._element.querySelector('.photo-grid__image'); 
        cardImage.alt = this._name;
        cardImage.src = this._link;
        this._element.querySelector('.photo-grid__title').textContent = this._name;

        this._like = this._element.querySelector('.photo-grid__like-counter'); 
        this._like.textContent = this._likes.length;

        this._buttonDeleteCard = this._element.querySelector('.photo-grid__delete-button');
        this._buttonLikeCard = this._element.querySelector('.photo-grid__like');

        this._removeButtonTrash();
        this._toggleLikeCard();
        this._setEventListeners();
        return this._element;
      }

      _isLike() {
        return this._likes.some((item) => this._myId === item._id)
      }
    
      _countLikeCard() {
        if (this._isLike()) {
          this._handleDeleteLike(this._cardId);
        }
        else {
          this._handleLikeCard(this._cardId);
        }
      }

      _toggleLikeCard() {
        if (this._isLike()) {
          this._buttonLikeCard.classList.add('photo-grid__like_type_active');
        }
        else {
          this._buttonLikeCard.classList.remove('photo-grid__like_type_active');
        }
      }

      _removeButtonTrash() {
        if (this._ownerId !== this._myId) {
          this._buttonDeleteCard.remove()
        }
      }

      likeCard() {
        this._buttonLikeCard.classList.toggle('photo-grid__like_type_active');
      }

      _handleRemoveCard() {
        this._handleDeleteCard(this._cardId, this._element);
      }

      deleteCard() {
        this._element.remove();
        this._element = null;
      }

      likeLenght(likeItem) {
        this._like.textContent = likeItem.length;
        this._likes = likeItem.likes
      }

      _setEventListeners() {
        this._element.querySelector('.photo-grid__card_type_button-img').addEventListener('click', () => {
          this._openPopupBigCard(this._name, this._link);
        });

        this._buttonDeleteCard.addEventListener('click', () => {
          this._handleRemoveCard();
        });

        this._buttonLikeCard.addEventListener('click', () => {
          this._countLikeCard();
      })
      }
};


