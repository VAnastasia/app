import { observable, action, decorate } from "mobx";

class UserStore {
  users = [
    {
      id: 1,
      login: "admin",
      password: "123456"
    },
    {
      id: 2,
      login: "user",
      password: "123456"
    }
  ];

  isAuth = 1;

  setUser = id => {
    this.isAuth = id;
  };

  onClickLogout = () => {
    this.setUser(null);
  };

  onSubmitAuth = evt => {
    evt.preventDefault();
    const login = document.forms[0].elements.login.value;
    const password = document.forms[0].elements.password.value;
    const user = this.users.filter(user => user.login === login)[0];

    if (user.password === password) {
      this.setUser(user.id);
    }
  };
}

decorate(UserStore, {
  users: observable,
  isAuth: observable,
  setUser: action,
  onClickLogout: action,
  onSubmitAuth: action
});

const userStore = new UserStore();

export { userStore };
