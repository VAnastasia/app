import React, { Component } from "react";
import "./main.css";
import Header from "../../components/header";
import NotesList from "../../components/notes-list";
import Search from "../../components/search";
import NoteDetails from "../../components/note-details";

import { observable } from "mobx";
import { observer, inject } from "mobx-react";

export default inject(
  "userStore",
  "notesStore"
)(
  observer(
    class Main extends Component {
      getNotes = () => {
        const isAuth = this.props.userStore.isAuth;
        const notes = this.props.notesStore.notes;
        return isAuth ? notes.filter(note => note.idUser === isAuth) : [];
      };

      state = {
        activeNote: this.getNotes()[0].id
      };

      onClickNote = id => {
        this.setState({
          activeNote: id
        });
      };

      onClickAdd = () => {
        const id = this.props.notesStore.notes.length + 1;
        this.props.notesStore.addNote({
          id: id,
          idUser: this.props.userStore.isAuth,
          title: "Новая заметка",
          text: "Текст новой заметки"
        });

        this.setState({
          activeNote: id
        });
      };

      render() {
        const { onClickLogout, users, isAuth } = this.props.userStore;
        const { onTitleChange } = this.props.notesStore;
        // const activeNoteDetails = () =>
        //   this.getNotes().filter(note => note.id === this.state.activeNote)[0];
        const activeNoteDetails = () =>
          this.getNotes().filter(note => note.id === this.state.activeNote)[0];
        console.log(activeNoteDetails());

        return (
          <div className="main">
            <Header
              onClickLogout={onClickLogout}
              isAuth={isAuth}
              users={users}
            />
            <main>
              <div className="main__left-column">
                <h1>Все заметки</h1>
                <Search />
                <NotesList
                  activeNote={this.state.activeNote}
                  onClickNote={this.onClickNote}
                  notesUser={this.getNotes()}
                  onClickAdd={this.onClickAdd}
                />
              </div>
              <div className="main__right-column">
                <NoteDetails
                  activeNoteDetails={activeNoteDetails}
                  onTitleChange={onTitleChange}
                />
              </div>
            </main>
          </div>
        );
      }
    }
  )
);
