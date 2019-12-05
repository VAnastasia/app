import React, { Component } from "react";
import Main from "../views/main";
import Welcome from "../views/welcome";
import Auth from "../views/auth";
import Register from "../views/register";

import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { observer, inject } from "mobx-react";

export default inject(
  "userStore",
  "notesStore"
)(
  observer(
    class Routes extends Component {
      render() {
        const { isAuth, isReg, onSubmitAuth } = this.props.userStore;
        
        const screen = () => (isAuth ? <Main /> : <Welcome />);
        const auth = () =>
          isAuth ? <Redirect to="/" /> : <Auth onSubmitAuth={onSubmitAuth} />;
        const register = () => (isReg ? <Redirect to="/auth" /> : <Register />);

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
