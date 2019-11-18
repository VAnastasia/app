import React, { Component } from "react";
import "./main.css";
import Header from "../../components/header/header";
import NotesList from "../../components/notes-list/notes-list";
import Search from "../../components/search/search";
import NoteDetails from "../../components/note-details/note-details";

export default class Main extends Component {
  notes = this.props.notes;

  state = {
    activeNote: this.notes[0].id
  };

  onClickNote = id => {
    this.setState({
      activeNote: id
    });
  };

  render() {
    const { notes, onClickLogout } = this.props;
    return (
      <div className="main">
        <Header onClickLogout={onClickLogout} />
        <main>
          <div className="main__left-column">
            <h1>Все заметки</h1>
            <Search />
            <NotesList
              notes={notes}
              activeNote={this.state.activeNote}
              onClickNote={this.onClickNote}
            />
          </div>
          <div className="main__right-column">
            <NoteDetails activeNote={this.state.activeNote} notes={notes} />
          </div>
        </main>
      </div>
    );
  }
}
