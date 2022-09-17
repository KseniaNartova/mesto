export class UserInfo {
    constructor({ userName, userJob }) {
      this._userName = document.querySelector(userName);
      this._userJob = document.querySelector(userJob);
    }
  
    getUserInfo() {
      const profileItems =  {
        name: this._userName.textContent,
        job: this._userJob.textContent,
      };
      return profileItems
    }
  
    setUserInfo({nameUser, jobUser}) {
      this._userName.textContent = nameUser;
      this._userJob.textContent = jobUser;
    }
  }

