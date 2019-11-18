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
    isAuth: 2,

    notes: [
      {
        id: 1,
        idUser: 1,
        title: "Заметка 1",
        text: "Текст заметки"
      },
      {
        id: 2,
        idUser: 1,
        title: "Заметка 2",
        text: "Текст заметки"
      },
      {
        id: 3,
        idUser: 2,
        title: "Заметка 3",
        text: "Текст заметки"
      },
      {
        id: 4,
        idUser: 2,
        title: "Заметка 4",
        text: "Текст заметки"
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

  render() {
    const { isAuth, notes } = this.state;
    const notesFiltered = notes.filter(note => {
      return note.idUser === isAuth;
    });

    const screen = props =>
      isAuth ? (
        <Main
          {...props}
          notes={notesFiltered}
          onClickLogout={this.onClickLogout}
        />
      ) : (
        <Welcome />
      );

    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={screen} />
          <Route path="/auth" component={Auth} />
          <Route path="/register" component={Register} />
        </div>
      </BrowserRouter>
    );
  }
}
