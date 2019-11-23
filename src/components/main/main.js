import React, { Component } from "react";
import "./main.css";
import Header from "../../components/header/header";
import NotesList from "../../components/notes-list/notes-list";
import Search from "../../components/search/search";
import NoteDetails from "../../components/note-details/note-details";
//import { action } from "mobx";
import { observer } from "mobx-react";

export default observer(
  class Main extends Component {
    render() {
      const {
        onClickLogout,
        isAuth,
        users,
        onClickAdd,
        activeNote,
        onClickNote,
        notes
      } = this.props;

      return (
        <div className="main">
          <Header onClickLogout={onClickLogout} isAuth={isAuth} users={users} />
          <main>
            <div className="main__left-column">
              <h1>Все заметки</h1>
              <Search />
              <NotesList
                notes={notes}
                activeNote={activeNote}
                onClickNote={onClickNote}
                onClickAdd={onClickAdd}
              />
            </div>
            <div className="main__right-column">
              <NoteDetails activeNote={activeNote} notes={notes} />
            </div>
          </main>
        </div>
      );
    }
  }
);
