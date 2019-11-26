import React, { Component } from "react";
import "./app.css";
import Main from "../../components/main";
import Welcome from "../../components/welcome";
import Auth from "../../components/auth";
import Register from "../../components/register";

import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { observer, inject } from "mobx-react";

export default inject("userStore")(
  observer(
    class App extends Component {
      render() {
        const isAuth = this.props.userStore.isAuth;

        const screen = () => (isAuth ? <Main /> : <Welcome />);
        const auth = () => (isAuth ? <Redirect to="/" /> : <Auth />);

        return (
          <BrowserRouter>
            <Route exact path="/" component={screen} />
            <Route path="/auth" component={auth} />
            <Route path="/register" component={Register} />
          </BrowserRouter>
        );
      }
    }
  )
);
