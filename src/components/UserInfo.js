export class UserInfo {
  constructor({userName, userJob, userAvatar}) {
      this._userName = document.querySelector(userName);
      this._userJob = document.querySelector(userJob);
      this._userAvatar = document.querySelector(userAvatar);
  }

  getUserInfo() {
      const profileItems = {
          name: this._userName.textContent,
          job: this._userJob.textContent,
          avatar: this._userAvatar.src
      }
      return profileItems
  }

  setUserInfo({ nameUser, jobUser, avatarUser }) {
      this._userName.textContent = nameUser;
      this._userJob.textContent = jobUser;
      this._userAvatar.src = avatarUser;
  }

  setAvatar({ avatarUser }) {
      this._userAvatar.src = avatarUser
  }
}