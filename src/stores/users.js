import { observable, action, decorate } from "mobx";
import firebase from "firebase/app";
import "../firebase/config";

import Firebase from "../firebase";

class UserStore {
  //Firebase = new Firebase();

  isAuth = null;
  isReg = false;
  userName = "";

  async registerUser({ email, password }) {
    const user = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => {
        // Handle Errors here.
        //var errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        // ...
      });
    console.log(user);

    if (user) {
      this.isReg = true;
    }
  }

  onSubmitRegister(evt) {
    evt.preventDefault();

    const user = {
      email: document.forms[0].elements.registerlogin.value,
      password: document.forms[0].elements.registerpassword.value
    };

    this.registerUser(user);
  }

  setUser = id => {
    this.isAuth = id;
  };

  onClickLogout = () => {
    //this.setUser(null);

    this.isAuth = null;
    this.userName = "";
    this.isReg = false;
  };

  async signIn({ email, password }) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
        // ...
      });
  }

  onSubmitAuth = evt => {
    evt.preventDefault();
    const user = {
      email: document.forms[0].elements.login.value,
      password: document.forms[0].elements.password.value
    };
    // const email = document.forms[0].elements.login.value;
    // const password = document.forms[0].elements.password.value;
    // const user = this.users.filter(user => user.login === login)[0];

    // if (user.password === password) {
    //   this.setUser(user.id);
    // }

    this.signIn(user);
    this.isAuth = user.uid;
    this.userName = user.email;

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log(user.uid);

        this.isAuth = user.uid;
        this.userName = user.email;

        // User is signed in.
      } else {
        // No user is signed in.
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
