import React, { Component } from "react";
import "./main.css";
import Header from "../../components/header";
import NotesList from "../../components/notes-list";
import Search from "../../components/search";
import NoteDetails from "../../components/note-details";

//import { observable } from "mobx";
import { observer, inject } from "mobx-react";

export default inject(
  "userStore",
  "notesStore"
)(
  observer(
    class Main extends Component {
      // getNotes = () => {
      //   const isAuth = this.props.userStore.isAuth;
      //   const notes = this.props.notesStore.notes;
      //   return isAuth ? notes.filter(note => note.idUser === isAuth) : [];
      // };

      state = {
        isAuth: this.props.userStore.isAuth,
        //notes: this.props.notesStore.getNotes(),
        //activeNote: this.getNotes()[0] ? this.getNotes()[0].id : null
        activeNote: null
      };

      setActiveNote(id) {
        this.setState({
          activeNote: id
        });
      }

      onClickNote = id => {
        this.setState({
          activeNote: id
        });
      };

      onClickAdd = () => {
        this.props.notesStore.writeNoteData(
          this.props.userStore.isAuth,
          "Новая заметка",
          "Текст"
        );
      };

      render() {
        const { onClickLogout, users, isAuth, userName } = this.props.userStore;
        const { onTitleChange } = this.props.notesStore;
        // const activeNoteDetails = () =>
        //   this.getNotes().filter(note => note.id === this.state.activeNote)[0];
        //const activeNoteDetails = () =>
        //this.getNotes().filter(note => note.id === this.state.activeNote)[0];
        //console.log(activeNoteDetails());

        if (isAuth && this.props.notesStore.isLoading) {
          this.props.notesStore.getNotes();
        }

        if (this.props.notesStore.isLoading) {
          return (
            <div className="main">
              <Header
                onClickLogout={onClickLogout}
                isAuth={isAuth}
                users={users}
                userName={userName}
              />
              <main>
                <div className="main__left-column">
                  <h1>Все заметки</h1>
                  <Search />
                  Загружается...
                </div>
                <div className="main__right-column">Загружается...</div>
              </main>
            </div>
          );
        } else {
          const notesUser = this.props.notesStore.notes.filter(
            note => note.userId === this.props.userStore.isAuth
          );
          const activeNote = notesUser[0].id;

          console.log(notesUser);

          return (
            <div className="main">
              <Header
                onClickLogout={onClickLogout}
                isAuth={isAuth}
                users={users}
                userName={userName}
              />
              <main>
                <div className="main__left-column">
                  <h1>Все заметки</h1>
                  <Search />
                  <NotesList
                    activeNote={activeNote}
                    onClickNote={this.onClickNote}
                    notesUser={notesUser}
                    onClickAdd={this.onClickAdd}
                  />
                </div>
                <div className="main__right-column">
                  <NoteDetails
                    //activeNoteDetails={activeNoteDetails}
                    onTitleChange={onTitleChange}
                  />
                </div>
              </main>
            </div>
          );
        }
      }
    }
  )
);
