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
        //notes: this.props.notesStore.getNotes(),
        //activeNote: this.getNotes()[0] ? this.getNotes()[0].id : null
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
          "Текст"
        );
      };

      render() {
        const { onClickLogout, isAuth, userName } = this.props.userStore;
        const { onTitleChange } = this.props.notesStore;
        // const activeNoteDetails = () =>
        //   this.getNotes().filter(note => note.id === this.state.activeNote)[0];
        //const activeNoteDetails = () =>
        //this.getNotes().filter(note => note.id === this.state.activeNote)[0];
        //console.log(activeNoteDetails());

        if (isAuth && this.props.notesStore.isLoading) {
          this.props.notesStore.getNotes();
        }

        let noteList = "";
        let noteDetails = "";
       
        

        if (this.props.notesStore.isLoading) {
          noteList = "Загружается...";
          noteDetails = "Загружается...";

        } else {
          const notesUser = this.props.notesStore.notes.filter(note => note.userId === isAuth);
          const activeNoteDetails = notesUser.filter(note => note.id ===        this.props.notesStore.activeNote)[0];
          console.log(activeNoteDetails);
          
          noteList = <NotesList
                      activeNote={this.props.notesStore.activeNote}
                      onClickNote={this.onClickNote}
                      notesUser={notesUser}
                      onClickAdd={this.onClickAdd}
                    />;

          noteDetails = <NoteDetails
                          notesUser={notesUser}
                          //activeNote={this.props.notesStore.activeNote}
                          activeNoteDetails={activeNoteDetails}
                          onTitleChange={onTitleChange}
                        />;      
        }

        if (this.props.notesStore.isLoadingActiveNote && this.props.notesStore.activeNote) {
          this.props.notesStore.getActiveNote();
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
                {noteDetails}
              </div>
            </main>
          </div>
        );
      }
    }
  )
);
