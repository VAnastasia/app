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
      onClickNote = id => {
        this.props.notesStore.setActiveNote(id);
      };

      onClickAdd = () => {
        this.props.notesStore.writeNoteData(
          this.props.userStore.isAuth,
          "Новая заметка",
          "",
          Date.now()
        );
      };

      onSaveNote = (title, text, id) => {
        this.props.notesStore.updateNoteData(title, text, id);
      };

      onSubmitNote = evt => {
        evt.preventDefault();

        this.onSaveNote(
          evt.target.title.value,
          evt.target.text.value,
          evt.target.id.value
        );
      };

      onDeleteNote = id => {
        this.props.notesStore.deleteNote(id);
      };

      onSearch = evt => {
        evt.preventDefault();

        this.setState({
          isSearching: true
        });

        if (!evt.target.value) {
          this.props.notesStore.getNotes();
        }

        const term = evt.target.value.toLowerCase();

        const filtredNotes = this.props.notesStore.notes
          .slice()
          .filter(note => {
            return (
              note.title.toLowerCase().indexOf(term) > -1 ||
              note.text.toLowerCase().indexOf(term) > -1
            );
          });

        return this.props.notesStore.onSearch(filtredNotes);
      };

      componentDidMount() {
        this.props.notesStore.getNotes();
      }

      render() {
        const { onClickLogout, isAuth, userName } = this.props.userStore;
        const { isLoading, notes, activeNote } = this.props.notesStore;

        let noteList = "";
        let notesUser = [];

        if (isLoading) {
          noteList = "Загружается...";
        } else {
          notesUser = notes.slice().sort((a, b) => b.date - a.date);

          noteList = (
            <NotesList
              activeNote={activeNote}
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
                <Search onSearch={this.onSearch} />
                <h1>
                  Все заметки<sup>{notesUser.length}</sup>
                </h1>
                {noteList}
              </div>
              <div className="main__right-column">
                <NoteDetails
                  notesUser={notesUser}
                  activeNote={activeNote}
                  onSaveNote={this.onSaveNote}
                  onSubmitNote={this.onSubmitNote}
                  onDeleteNote={this.onDeleteNote}
                />
              </div>
            </main>
          </div>
        );
      }
    }
  )
);
