import {Popup} from './Popup.js';

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
        this._popupImg = this._popup.querySelector('.popup__img');
        this._popupImgTitle = this._popup.querySelector('.popup__img-title');
    }

    open(name, link) {
        super.open();
        this._popupImg.src = link;
        this._popupImgTitle.textContent = name;
        this._popupImg.alt = name;
    }
}



