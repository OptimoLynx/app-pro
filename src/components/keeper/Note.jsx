import React from "react";
import NoteCard from "./NoteCard";
import notes from "../../notes";

function createNotes(noteItem) {
  return (
    <NoteCard
      key={noteItem.key}
      title={noteItem.title}
      content={noteItem.content}
    />
  );
}

function Note() {
  return <div>{notes.map(createNotes)}</div>;
}

export default Note;
