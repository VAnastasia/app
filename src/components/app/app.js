import React from "react";
import "./app.css";
import Header from "../../components/header/header";
import Welcome from "../../components/welcome/welcome";

function App() {
  return (
    <div className="App">
      <Welcome />
      <Header />
      <h1>Заметки</h1>
    </div>
  );
}

export default App;
