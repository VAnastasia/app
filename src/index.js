import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/app/app";
import { notesStore } from "./stores/notes";
//import { Provider } from "mobx-react";

ReactDOM.render(
  <App notesStore={notesStore} />,
  document.getElementById("root")
);
