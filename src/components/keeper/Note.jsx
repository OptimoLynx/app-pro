import React, { useState } from "react";
import NoteCard from "./NoteCard";
import CreateArea from "./CreateArea";

function Note() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((preNotes) => {
      return [...preNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((preNotes) => {
      return preNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <>
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <NoteCard
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
    </>
  );
}

export default Note;
