import { observable, action, decorate } from "mobx";
import firebase from "firebase/app";
import "../firebase/config";

class UserStore {
  isAuth = null;
  isReg = false;
  userName = "";

  async registerUser({ email, password }) {
    const user = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => {
        const errorMessage = error.message;
        alert(errorMessage);
      });

    if (user) {
      this.isReg = true;
    }
  }

  onSubmitRegister = evt => {
    evt.preventDefault();

    const user = {
      email: document.forms[0].elements.registerlogin.value,
      password: document.forms[0].elements.registerpassword.value
    };

    this.registerUser(user);
  };

  setUser = id => {
    this.isAuth = id;
  };

  onClickLogout = () => {
    this.isAuth = null;
    this.userName = "";
    this.isReg = false;
  };

  async signIn({ email, password }) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
        this.isAuth = null;
        this.userName = "";
        const errorMessage = error.message;
        alert(errorMessage);
      });
  }

  onSubmitAuth = evt => {
    evt.preventDefault();
    const user = {
      email: document.forms[0].elements.login.value,
      password: document.forms[0].elements.password.value
    };

    this.signIn(user);

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.isAuth = user.uid;
        this.userName = user.email;
      } else {
        this.isAuth = null;
        this.userName = "";
      }
    });
  };
}

decorate(UserStore, {
  users: observable,
  isAuth: observable,
  isReg: observable,
  userName: observable,
  setUser: action,
  onClickLogout: action,
  onSubmitAuth: action
});

const userStore = new UserStore();

export { userStore };
