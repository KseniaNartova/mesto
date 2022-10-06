export class FormValidator {
  constructor(config, popupForm) {
    this._config = config;
    this._popupForm = popupForm;
    this._inputs = Array.from(this._popupForm.querySelectorAll(this._config.input));
    this._button = this._popupForm.querySelector(this._config.submitButtonSelector);
  }

  //показывает текст ошибки
  _assignNameFieldError(input) {
    this._nameSpan = this._popupForm.querySelector(`#${input.name}-error`);
    this._nameSpan.textContent = input.validationMessage;
  }

  //убрать текст ошибки
  _hideNameFieldError(input) {
    this._nameSpan = this._popupForm.querySelector(`#${input.name}-error`);
    this._nameSpan.textContent = "";
  }

  _hasValidInput() {
    const formIsValid = this._popupForm.checkValidity();
    return formIsValid;
  }

  //  кнопка самбита, если поля валидны и не валидны
  _enableSubmitButton() {
    this._button.removeAttribute("disabled", "disabled");
    this._button.classList.remove(this._config.inactiveButtonClass);
  }

  _disableSubmitButton() {
    this._button.setAttribute("disabled", "disabled");
    this._button.classList.add(this._config.inactiveButtonClass);
  }

  _toggleSubmitButtonState() {
    if (this._hasValidInput()) {
      this._enableSubmitButton();
    } else {
      this._disableSubmitButton();
    }
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
    }
  }

  _handleFormInput(evt) {
    this._input = evt.target;
    this._toggleSubmitButtonState();
    this._checkValidInput(this._input);
  }
  _setErrorInputValid(input) {
    input.classList.remove(this._config.inputErrorClass);
    this._hideNameFieldError(input);
  }

  resetValidation() {
    this._disableSubmitButton();
    this._inputs.forEach((input) => {
      this._setErrorInputValid(input);
    });
  }

  enableValidation() {
    this._popupForm.addEventListener("input", (evt) =>
      this._handleFormInput(evt)
    );
  }
}
