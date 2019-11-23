import { observable, computed, action, decorate } from "mobx";

class NotesStore {
  notes = [
    {
      id: 1,
      idUser: 1,
      title: "Заметка 1",
      text: "Текст заметки 1"
    },
    {
      id: 2,
      idUser: 2,
      title: "Заметка 2",
      text: "Текст заметки 2"
    }
  ];

  isAuth = 0;

  get notesUser() {
    return this.isAuth
      ? this.notes.filter(note => note.userId === this.isAuth)
      : [];
  }

  get length() {
    return this.notes.length;
  }

  addNote({ id, idUser, title, text }) {
    this.notes.push({
      id,
      idUser,
      title,
      text
    });
  }
}

decorate(NotesStore, {
  notes: observable,
  isAuth: observable,
  notesUser: computed,
  length: computed,
  addNote: action
});

const notesStore = new NotesStore();

export { notesStore };
