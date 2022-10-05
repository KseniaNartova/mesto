import {Popup} from './Popup.js';
import { validationConfig } from '../utils/constants.js';

export class PopupWithForm extends Popup {
    constructor(popupSelector, submitProfileForm) {
        super(popupSelector);
        this._submitProfileForm = submitProfileForm;
        this._form = this._popup.querySelector(validationConfig.formSelector);
        this._inputList = Array.from(this._popup.querySelectorAll(validationConfig.input));
        this._buttonSave = this._form.querySelector(validationConfig.submitButtonSelector);
        this._inintalText = this._buttonSave.textContent;
    }

    _getInputValues() {
        this._inputValues = {}
        this._inputList.forEach((input) => {
            this._inputValues[input.name] = input.value;
        });
        return this._inputValues
    }

    close() {
        super.close();
        this._form.reset()
    }
 
    renderLoading(isLoading) {
        if (isLoading) {
            this._buttonSave.textContent = 'Сохранение...';
        }
        else {
            this._buttonSave.textContent = this._inintalText;
        }
      }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitProfileForm(this._getInputValues())
            this.renderLoading(true);
        })
}
};
