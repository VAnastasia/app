import React, { Component } from "react";
import "./main.css";
import Header from "../../components/header/header";
import NotesList from "../../components/notes-list/notes-list";
import Search from "../../components/search/search";
import NoteDetails from "../../components/note-details/note-details";
import { observer, inject } from "mobx-react";

export default inject("userStore")(
  observer(
    class Main extends Component {
      render() {
        return (
          <div className="main">
            <Header />
            <main>
              <div className="main__left-column">
                <h1>Все заметки</h1>
                <Search />
                <NotesList />
              </div>
              <div className="main__right-column">
                <NoteDetails />
              </div>
            </main>
          </div>
        );
      }
    }
  )
);
