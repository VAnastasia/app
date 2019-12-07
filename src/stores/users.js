import { observable, action, decorate } from "mobx";
import firebase from "firebase/app";
import "../firebase/config";

class UserStore {
  isAuth = localStorage.getItem("user_id")
    ? localStorage.getItem("user_id")
    : null;
  isReg = false;
  userName = localStorage.getItem("user_name")
    ? localStorage.getItem("user_name")
    : "";

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
    localStorage.clear();

    this.signOut();
  };

  signOut() {
    firebase
      .auth()
      .signOut()
      .then(function() {
        // Sign-out successful.
      })
      .catch(function(error) {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  }

  signIn({ email, password }) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
        this.isAuth = null;
        this.userName = "";
        localStorage.clear();
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
        localStorage.setItem("user_id", user.uid);
        localStorage.setItem("user_name", user.email);
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
  errorMessage: observable,
  setUser: action,
  onClickLogout: action,
  onSubmitAuth: action
});

const userStore = new UserStore();

export { userStore };
