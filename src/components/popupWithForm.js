import {Popup} from './Popup.js';
import { validationConfig } from '../utils/Constants.js';


export class PopupWithForm extends Popup {
    constructor(popupSelector, submitProfileForm) {
        super(popupSelector);
        this._submitProfileForm = submitProfileForm;
        this._form = this._popup.querySelector(validationConfig.formSelector);
        this._inputList = Array.from(this._popup.querySelectorAll(validationConfig.input));
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

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitProfileForm(this._getInputValues())
        })
}
}
