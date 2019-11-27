import React, { Component } from "react";
import "./main.css";
import Header from "../../components/header";
import NotesList from "../../components/notes-list";
import Search from "../../components/search";
import NoteDetails from "../../components/note-details";

export default class Main extends Component {
  render() {
    const { onClickLogout, isAuth, users, activeNote, onClickNote, notesUser, onClickAdd } = this.props;

    return (
      <div className="main">
        <Header onClickLogout={onClickLogout} isAuth={isAuth} users={users} />
        <main>
          <div className="main__left-column">
            <h1>Все заметки</h1>
            <Search />
            <NotesList activeNote={activeNote} onClickNote={onClickNote} notesUser={notesUser} onClickAdd={onClickAdd} />
          </div>
          <div className="main__right-column">
            <NoteDetails activeNote={activeNote} />
          </div>
        </main>
      </div>
    );
  }
};
