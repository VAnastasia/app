import React, { Component } from "react";
import "./main.css";
import Header from "../../components/header";
import NotesList from "../../components/notes-list";
import Search from "../../components/search";
import NoteDetails from "../../components/note-details";

import { observer, inject } from "mobx-react";

export default inject(
  "userStore",
  "notesStore"
)(
  observer(
    class Main extends Component {
      state = {
        activeNote: null
      };

      onClickNote = id => {
        this.props.notesStore.setActiveNote(id);

        this.setState({
          activeNote: id
        });
      };

      onClickAdd = () => {
        this.props.notesStore.writeNoteData(
          this.props.userStore.isAuth,
          "Новая заметка",
          ""
        );
      };

      onSaveNote = (title, text, id, userId) => {
        this.props.notesStore.updateNoteData(title, text, id, userId);
      };

      onSubmitNote = evt => {
        evt.preventDefault();

        this.onSaveNote(
          evt.target.title.value,
          evt.target.text.value,
          evt.target.id.value,
          this.props.notesStore.isAuth
        );
      };

      render() {
        const { onClickLogout, isAuth, userName } = this.props.userStore;
       
        if (isAuth && this.props.notesStore.isLoading) {
          this.props.notesStore.getNotes();
        }

        let noteList = "";
        let notesUser = [];

        if (this.props.notesStore.isLoading) {
          noteList = "Загружается...";
        } else {
          notesUser = this.props.notesStore.notes.filter(
            note => note.userId === isAuth
          );

          noteList = (
            <NotesList
              activeNote={this.props.notesStore.activeNote}
              onClickNote={this.onClickNote}
              notesUser={notesUser}
              onClickAdd={this.onClickAdd}
            />
          );
        }

        return (
          <div className="main">
            <Header
              onClickLogout={onClickLogout}
              isAuth={isAuth}
              userName={userName}
            />
            <main>
              <div className="main__left-column">
                <h1>Все заметки</h1>
                <Search />
                {noteList}
              </div>
              <div className="main__right-column">
                <NoteDetails
                  notesUser={notesUser}
                  activeNote={this.props.notesStore.activeNote}
                  onSaveNote={this.onSaveNote}
                  onSubmitNote={this.onSubmitNote}
                />
              </div>
            </main>
          </div>
        );
      }
    }
  )
);
