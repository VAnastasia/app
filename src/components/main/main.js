import React, { Component } from "react";
import "./main.css";
import Header from "../../components/header/header";
import NotesList from "../../components/notes-list/notes-list";

export default class Main extends Component {
  constructor(props) {
    super();
    this.notes = props.notes;
  }

  render() {
    return (
      <div className="main">
        <Header />
        <main>
          <div className="main__left-column">
            <h1>Все заметки</h1>
            {/* <NotesList notes={this.notes} /> */}
          </div>
          <div className="main__right-column">
            <h2>Название заметки</h2>
          </div>
        </main>
      </div>
    );
  }
}
