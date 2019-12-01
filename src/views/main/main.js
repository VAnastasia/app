import React, { Component } from "react";
import "./main.css";
import Header from "../../components/header";
import NotesList from "../../components/notes-list";
import Search from "../../components/search";
import NoteDetails from "../../components/note-details";
import Firebase from "../../firebase";

//import { observable } from "mobx";
import { observer, inject } from "mobx-react";

export default inject(
  "userStore",
  "notesStore"
)(
  observer(
    class Main extends Component {
      Firebase = new Firebase();
      // getNotes = () => {
      //   const isAuth = this.props.userStore.isAuth;
      //   const notes = this.props.notesStore.notes;
      //   return isAuth ? notes.filter(note => note.idUser === isAuth) : [];
      // };

      state = {
        //notes: this.props.notesStore.getNotes(),
        //activeNote: this.getNotes()[0] ? this.getNotes()[0].id : null
        activeNote: null
      };

      onClickNote = id => {
        this.setState({
          activeNote: id
        });
      };

      onClickAdd = () => {
        // const id = this.props.notesStore.notes.length + 1;
        // this.props.notesStore.addNote({
        //   id: id,
        //   idUser: this.props.userStore.isAuth,
        //   title: "Новая заметка",
        //   text: "Текст новой заметки"
        // });

        // this.setState({
        //   activeNote: id
        // });

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

        const notesUser = this.props.notesStore.notesUpdate();

        this.props.notesStore.notesUpdate().then(res => console.log(res));

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
                  //activeNote={this.state.activeNote}
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
  )
);
