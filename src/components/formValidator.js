export class FormValidator {
    constructor(config, popupForm) {
        this._config = config;
        this._popupForm = popupForm;
        this._inputs = Array.from(this._popupForm.querySelectorAll(this._config.input));
        this._button = this._popupForm.querySelector(this._config.submitButtonSelector);
    }

//показать текст ошибки
    _assignNameFieldError(input) {
        this._nameSpan = this._popupForm.querySelector(`#${input.name}-error`);
        this._nameSpan.textContent = input.validationMessage;
}

//убрать текст ошибки
    _hideNameFieldError(input) {
        this._nameSpan = this._popupForm.querySelector(`#${input.name}-error`);
        this._nameSpan.textContent = '';
}

//  кнопка самбита, если поля валидны и не валидны
    _buttonFormSubmitValid(formSelector) {
        const formIsValid = formSelector.checkValidity();
        if (formIsValid) {
            this._button.removeAttribute('disabled', 'disabled');
            this._button.classList.remove(this._config.inactiveButtonClass);
    }
}

    _buttonFormSubmitNotValid() {
        this._button.setAttribute('disabled', 'disabled');
        this._button.classList.add(this._config.inactiveButtonClass);
}

//проверка валидности
    _checkValidInput(input) {
        const inputIsValid = input.checkValidity();
        if (inputIsValid) {
            input.classList.remove(this._config.inputErrorClass);
            this._hideNameFieldError(input);
        } else {
            input.classList.add(this._config.inputErrorClass);
            this._assignNameFieldError(input);
            this._buttonFormSubmitNotValid();
        }
    }

    _handleFormInput(evt) {
        this._input = evt.target;
        this._buttonFormSubmitValid(this._popupForm);
        this._checkValidInput(this._input);
}
    _setErrorInputValid(input) {
        input.classList.remove(this._config.inputErrorClass);
        this._hideNameFieldError(input);
    }

    resetValidation() {
        this._buttonFormSubmitNotValid()
        this._inputs.forEach((input) => {
            this._setErrorInputValid(input)
        })
}

    enableValidation() {
        this._popupForm.addEventListener('input', (evt) => this._handleFormInput(evt));
}
}
