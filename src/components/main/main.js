import React from "react";
import "./main.css";
import Header from "../../components/header/header";
import NotesList from "../../components/notes-list/notes-list";

const Main = props => {
  const { notes, onClickLogout } = props;

  return (
    <div className="main">
      <Header onClickLogout={onClickLogout} />
      <main>
        <div className="main__left-column">
          <h1>Все заметки</h1>
          <NotesList notes={notes} />
        </div>
        <div className="main__right-column">
          <h2>Название заметки</h2>
        </div>
      </main>
    </div>
  );
};

export default Main;
