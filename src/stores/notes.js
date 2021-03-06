import { observable, action, decorate } from "mobx";
import firebase from "firebase/app";
import "../firebase/config";

const database = firebase.database();

class NotesStore {
  notes = [];
  activeNote = null;
  isLoading = true;

  setActiveNote = id => {
    //localStorage.setItem("isEditing", id);
    this.activeNote = id;
  };

  clearNotes = () => (this.notes = []);

  onSearch = filtredNotes => {
    this.notes = filtredNotes;
  };

  getNotes() {
    this.isLoading = true;
    database
      .ref("notes/")
      .orderByChild("date")
      .once("value")
      .then(snapshot => {
        this.notes = [];
        snapshot.forEach(obj => {
          if (obj.val().userId === localStorage.getItem("user_id")) {
            const note = obj.val();
            note.id = obj.key;
            this.notes.push(note);
          }
        });

        this.isLoading = false;
        this.activeNote =
          this.notes.length > 0 ? this.notes[this.notes.length - 1].id : null;
      })
      .catch(error => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  }

  writeNoteData(userId, title, text, date) {
    firebase
      .database()
      .ref("notes/")
      .push({
        userId: userId,
        title: title,
        text: text,
        date: date
      })
      .catch(error => {
        const errorMessage = error.message;
        alert(errorMessage);
      });

    this.getNotes();
  }

  updateNoteData(title, text, id) {
    firebase
      .database()
      .ref("notes/" + id)
      .update({
        title: title,
        text: text,
        date: Date.now()
      })
      .catch(error => {
        const errorMessage = error.message;
        alert(errorMessage);
      });

    this.getNotes();
  }

  deleteNote(id) {
    firebase
      .database()
      .ref("notes/" + id)
      .remove()
      .catch(error => {
        const errorMessage = error.message;
        alert(errorMessage);
      });

    this.getNotes();
  }
}

decorate(NotesStore, {
  notes: observable,
  isLoading: observable,
  activeNote: observable,
  clearNotes: action,
  setActiveNote: action,
  getNotes: action
});

const notesStore = new NotesStore();
export { notesStore };
