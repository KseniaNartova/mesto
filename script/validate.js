const validationConfig = {
    formSelector: '.popup__container',
    submitButtonSelector: '.popup__button-save',
    inputSelector: '.popup__input',
    inputErrorClass: 'popup__input_type_error',
    inactiveButtonClass: 'popup__button-save_type_disabled',
}

// дизейблим кнопку, если поля невалидны
const toggleButtonFormSubmit = (formSelector, config) => {
    const buttonSave = formSelector.querySelector(config.submitButtonSelector);
    const formIsValid = formSelector.checkValidity();
    if (formIsValid) {
        buttonSave.removeAttribute('disabled', 'disabled');
        buttonSave.classList.remove(config.inactiveButtonClass);
    } 
    else {
        buttonSave.setAttribute('disabled', 'disabled');
        buttonSave.classList.add(config.inactiveButtonClass);
    }
}

//проверяем поля инпуты на валидность
const checkValidInput = (formSelector, config) => {
    const inputsAll = Array.from(formSelector.querySelectorAll(config.inputSelector));
   inputsAll.forEach((input) => {
    const inputIsValid = input.checkValidity();
    if (inputIsValid) {
        input.classList.remove(config.inputErrorClass);
    } else {
        input.classList.add(config.inputErrorClass);
    }
    })
   };


//делаем так, чтобы текс сообзения брался из стандартной валижации

const assignNameFieldError = (inputSelector, formSelector) => {
    const nameSpan = formSelector.querySelector(`#${inputSelector.name}-error`);
    nameSpan.textContent = inputSelector.validationMessage;
}

const enableValidation = (config) => {
    const form = Array.from(document.querySelectorAll(config.formSelector));
    form.forEach((form) => {
        form.addEventListener('input', (evt) => {
            const input = evt.target;
            const form = evt.currentTarget;
            assignNameFieldError(input, form);
            toggleButtonFormSubmit(form, config);
            checkValidInput(form, config);
        });
    })
}

enableValidation(validationConfig);



