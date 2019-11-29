import React, { Component } from "react";
import "./register.css";
import { Link } from "react-router-dom";
import Button from "../../components/button";
import FieldForm from "../../components/field-form";

import { observer, inject } from "mobx-react";

export default 
inject("userStore")(
  observer(
    class Register extends Component {
      render() {
        return (
          <form className="register" method="post" onSubmit={this.props.userStore.onSubmitRegister}>
            <h1>Регистрация</h1>
            <FieldForm type="text" id="registerlogin" label="Логин" />
            <FieldForm type="password" id="registerpassword" label="Пароль" />
            <FieldForm type="password" id="registerpasswordrepeat" label="Повторите пароль" />
            <Button type="submit" title="Отправить" />
            <Link to="/auth">
              <Button type="button" title="Войти" />
            </Link>
          </form>
        );
      }
    }));
