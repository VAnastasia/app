import React, { Component } from "react";
import "./app.css";
import Main from "../../views/main";
import Welcome from "../../views/welcome";
import Auth from "../../views/auth";
import Register from "../../views/register";

import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { observer, inject } from "mobx-react";

export default inject("userStore", "notesStore")(
  observer(
    class App extends Component {
      render() {
        const { onClickLogout, isAuth, users, onSubmitAuth } = this.props.userStore;
        const { activeNote, onClickNote, notesUser, onClickAdd } = this.props.notesStore;

        const screen = () => (isAuth ? <Main /> : <Welcome />);
        const auth = () => (isAuth ? <Redirect to="/" /> : <Auth onSubmitAuth={onSubmitAuth} />);
        const register = () => (isAuth ? <Redirect to="/" /> : <Register />);

        return (
          <BrowserRouter>
            <Route exact path="/" component={screen} />
            <Route path="/auth" component={auth} />
            <Route path="/register" component={register} />
          </BrowserRouter>
        );
      }
    }
  )
);
