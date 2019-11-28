import React, { Component } from "react";
import "./main.css";
import Header from "../../components/header";
import NotesList from "../../components/notes-list";
import Search from "../../components/search";
import NoteDetails from "../../components/note-details";

import { observer, inject } from "mobx-react";

export default inject("userStore", "notesStore")(
  observer(
    class Main extends Component {
          
      getNotes = () => {
        const isAuth = this.props.userStore.isAuth;
        const notes = this.props.notesStore.notes;
        return isAuth ? notes.filter(note => note.idUser === isAuth) : [];
      };

      state = {
        activeNote: this.getNotes()[0].id
      }
      
      onClickNote = id => {
        this.setState({
          activeNote: id
        })
      };
      
      render() {
        
        const { onClickLogout, users } = this.props.userStore;
        const { onClickAdd } = this.props.notesStore;
        const activeNoteDetails = this.getNotes().filter(note => note.id === this.state.activeNote)[0];

        return (
          <div className="main">
            <Header onClickLogout={onClickLogout} isAuth={this.isAuth} users={users} />
            <main>
              <div className="main__left-column">
                <h1>Все заметки</h1>
                <Search />
                <NotesList activeNote={this.state.activeNote} onClickNote={this.onClickNote} notesUser={this.getNotes()} onClickAdd={onClickAdd} />
              </div>
              <div className="main__right-column">
                <NoteDetails activeNoteDetails={activeNoteDetails} />
              </div>
            </main>
          </div>
        );
      }
    }));
