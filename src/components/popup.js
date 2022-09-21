export class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._buttonClose = this._popup.querySelector('.popup__button-close')
    }
    open() {
        this._popup.classList.add('popup_open');
        document.addEventListener('keydown', this._closePopupEsc);
    }

    close() {
        this._popup.classList.remove('popup_open');
        document.removeEventListener('keydown', this._closePopupEsc);
    }

    _closePopupEsc = (evt) => {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    _closePopupOverlayAndCross(evt) {
        if (evt.target === evt.currentTarget) {
            this.close();
        }
    }

    setEventListeners() {
        this._popup.addEventListener('mousedown', (evt) => { this._closePopupOverlayAndCross(evt) })
        this._buttonClose.addEventListener('click', () => this.close())
    }
}


