import React, { Component } from "react";
import "./app.css";
import Main from "../../components/main/main";
import Welcome from "../../components/welcome/welcome";
import Auth from "../../components/auth/auth";
import Register from "../../components/register/register";
import { BrowserRouter, Route } from "react-router-dom";
//import { observable } from "mobx";
import { observer } from "mobx-react";

export default observer(
  class App extends Component {
    notes = this.props.notesStore.notes;
    isAuth = this.props.notesStore.isAuth;
    notesStore = this.props.notesStore;

    state = {
      //isAuth: 1,

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

      activeNote: this.notes[0].id
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

    onClickAdd = () => {
      this.notesStore.addNote({
        id: this.notes.length,
        idUser: this.isAuth,
        title: "Новая заметка",
        text: "Текст новой заметки"
      });
    };

    onClickNote = id => {
      this.setState({
        activeNote: id
      });
    };

    render() {
      const { users } = this.state;
      const notesFiltered = this.notes.filter(note => {
        return note.idUser === this.isAuth;
      });

      //const notesFiltered = this.props.notesStore.notesUser();

      const screen = props =>
        this.isAuth ? (
          <Main
            {...props}
            isAuth={this.isAuth}
            users={users}
            notes={notesFiltered}
            onClickLogout={this.onClickLogout}
            onClickAdd={this.onClickAdd}
            onClickNote={this.onClickNote}
            activeNote={this.state.activeNote}
          />
        ) : (
          <Welcome />
        );

      const auth = props => {
        return this.isAuth ? (
          <Main
            {...props}
            isAuth={this.isAuth}
            users={users}
            notes={notesFiltered}
            onClickLogout={this.onClickLogout}
            onClickAdd={this.onClickAdd}
            onClickNote={this.onClickNote}
            activeNote={this.state.activeNote}
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
);
