import {Popup} from "./Popup.js";

export class PopupWithDeleteCard extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._buttonConfirmDeleteCard = document.querySelector('.popup__button-save_type_confirm-delete')
    }

    setSubmitHandler(data) {
        this._submitRequest = data;
    }
    
    setEventListeners() {
        super.setEventListeners();
        this._buttonConfirmDeleteCard.addEventListener('click', (evt) => {
            evt.preventDefault();
            this._submitRequest();
        })
    }
}

