import { PopupWithForm } from "./PopupWithForm.js";

export class PopupWithAvatar extends PopupWithForm {
  constructor(popupSelector, submitProfileForm) {
    super(popupSelector, submitProfileForm);
    this._avatar = document.querySelector(".profile__avatar");
  }
}
