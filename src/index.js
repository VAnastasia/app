import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Routes from "./routes/routes";
import { notesStore } from "./stores/notes";
import { userStore } from "./stores/users";
import { Provider } from "mobx-react";

const stores = { notesStore, userStore };

ReactDOM.render(
  <Provider {...stores}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
