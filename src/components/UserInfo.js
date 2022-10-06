export class UserInfo {
  constructor({ userNameSelector, userJobSelector, userAvatarSelector }) {
    this._userName = document.querySelector(userNameSelector);
    this._userJob = document.querySelector(userJobSelector);
    this._userAvatar = document.querySelector(userAvatarSelector);
  }

  getUserInfo() {
    const profileItems = {
      name: this._userName.textContent,
      job: this._userJob.textContent,
      avatar: this._userAvatar.src,
    };
    return profileItems;
  }

  setUserInfo({ nameUser, jobUser, avatarUser }) {
    this._userName.textContent = nameUser;
    this._userJob.textContent = jobUser;
    this._userAvatar.src = avatarUser;
  }

  setAvatar({ avatarUser }) {
    this._userAvatar.src = avatarUser;
  }
}
