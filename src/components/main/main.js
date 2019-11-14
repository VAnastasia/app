import React from "react";
import "./main.css";
import Header from "../../components/header/header";
import NotesList from "../../components/notes-list/notes-list";
import Search from "../../components/search/search";
import NoteDetails from "../../components/note-details/note-details";

const Main = props => {
  const { notes, onClickLogout } = props;
  const activeNote = notes.filter(note => note.active)[0];

  return (
    <div className="main">
      <Header onClickLogout={onClickLogout} />
      <main>
        <div className="main__left-column">
          <h1>Все заметки</h1>
          <Search />
          <NotesList notes={notes} />
        </div>
        <div className="main__right-column">
          <NoteDetails activeNote={activeNote} />
        </div>
      </main>
    </div>
  );
};

export default Main;
