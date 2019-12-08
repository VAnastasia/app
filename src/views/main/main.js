import React, { Component } from "react";
import "./main.css";
import Header from "../../components/header";
import NotesList from "../../components/notes-list";
import Search from "../../components/search";
import NoteDetails from "../../components/note-details";
import Spinner from "../../components/spinner";
import img from "./down-icon.svg";

import { observer, inject } from "mobx-react";

export default inject(
  "userStore",
  "notesStore"
)(
  observer(
    class Main extends Component {
      state = {
        sortDate: true
      };

      onSortDate = () => {
        this.setState({
          sortDate: !this.state.sortDate
        });
      };

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

      onClickLogout = () => {
        this.props.userStore.onClickLogout();
        this.props.notesStore.clearNotes();
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

      getNotes() {
        const notes = this.props.notesStore.notes;
        let notesUser = notes.slice().sort((a, b) => b.date - a.date);

        if (this.state.sortDate) {
          notesUser = notes.slice().sort((a, b) => b.date - a.date);
        }

        if (!this.state.sortDate) {
          notesUser = notes.slice().sort((a, b) => a.date - b.date);
        }

        return notesUser;
      }

      componentDidMount() {
        this.props.notesStore.getNotes();
      }

      componentDidUpdate() {
        this.getNotes();
      }

      render() {
        const { isAuth, userName } = this.props.userStore;
        const { isLoading, activeNote } = this.props.notesStore;

        const spinner = isLoading ? <Spinner /> : null;

        const classNameButtonSort = this.state.sortDate
          ? "main__sort down"
          : "main__sort up";

        return (
          <div className="main">
            <Header
              onClickLogout={this.onClickLogout}
              isAuth={isAuth}
              userName={userName}
            />
            <main>
              <div className="main__left-column">
                <h1>
                  Все заметки
                  <sup>{this.getNotes().length}</sup>
                </h1>
                <button
                  className={classNameButtonSort}
                  onClick={this.onSortDate}
                  title="Сортировка по дате"
                >
                  <img src={img} width="16" height="16" alt="up-down" />
                </button>
                <Search onSearch={this.onSearch} />
                <NotesList
                  activeNote={activeNote}
                  onClickNote={this.onClickNote}
                  notesUser={this.getNotes()}
                  onClickAdd={this.onClickAdd}
                />
              </div>
              <div className="main__right-column">
                <NoteDetails
                  notesUser={this.getNotes()}
                  activeNote={activeNote}
                  onSaveNote={this.onSaveNote}
                  onSubmitNote={this.onSubmitNote}
                  onDeleteNote={this.onDeleteNote}
                />
              </div>
            </main>
            {spinner}
          </div>
        );
      }
    }
  )
);
