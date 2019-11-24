import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/app/app";
import { notesStore } from "./stores/notes";
import { userStore } from "./stores/users";
import { Provider } from "mobx-react";

const stores = { notesStore, userStore };

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById("root")
);
