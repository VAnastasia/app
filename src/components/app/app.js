import React, { Component } from "react";
import "./app.css";
import Main from "../../components/main/main";
import Welcome from "../../components/welcome/welcome";
import Auth from "../../components/auth/auth";
import Register from "../../components/register/register";
import { BrowserRouter, Route } from "react-router-dom";
//import { observable } from "mobx";

export default class App extends Component {
  state = {
<<<<<<< HEAD
    isAuth: null,

    users: [
      {
        id: 1,
        login: "Admin",
        password: "123456"
      },
      {
        id: 2,
        login: "User",
        password: "123456"
      }
    ],
=======
    isAuth: 1,
>>>>>>> c6698efbbd71434818d56293a8928107cffee5b5

    notes: [
      {
        id: 1,
        idUser: 1,
        title: "Заметка 1",
        text: "Текст заметки 1"
      },
      {
        id: 2,
        idUser: 1,
        title: "Заметка 2",
        text: "Текст заметки 2"
      },
      {
        id: 3,
        idUser: 2,
        title: "Заметка 3",
        text: "Текст заметки 3"
      },
      {
        id: 4,
        idUser: 2,
        title: "Заметка 4",
        text: "Текст заметки 4"
      }
    ]
  };

  onClickLogout = () => {
    this.setState(() => {
      return {
        isAuth: null
      };
    });
  };

  onSubmitAuth = evt => {
    evt.preventDefault();
    const login = document.forms[0].elements.login.value;
    const password = document.forms[0].elements.password.value;
    const user = this.state.users.filter(user => user.login === login)[0];

    if (user.password === password) {
      this.setState(() => {
        return {
          isAuth: user.id
        };
      });
    }
  };

  render() {
    const { isAuth, notes, users } = this.state;
    const notesFiltered = notes.filter(note => {
      return note.idUser === isAuth;
    });

    const screen = props =>
      isAuth ? (
        <Main
          {...props}
          isAuth={isAuth}
          users={users}
          notes={notesFiltered}
          onClickLogout={this.onClickLogout}
        />
      ) : (
        <Welcome />
      );

    const auth = props => {
      return isAuth ? (
        <Main
          {...props}
          isAuth={isAuth}
          users={users}
          notes={notesFiltered}
          onClickLogout={this.onClickLogout}
        />
      ) : (
        <Auth {...props} onSubmitAuth={this.onSubmitAuth} />
      );
    };
    
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={screen} />
          <Route path="/auth" component={auth} />
          <Route path="/register" component={Register} />
        </div>
      </BrowserRouter>
    );
  }
}
