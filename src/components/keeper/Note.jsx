import React from "react";
import NoteCard from "./NoteCard";
import notes from "../../notes";

function Note() {
  return (
    <div>
      {notes.map((noteItem) => (
        <NoteCard
          key={noteItem.key}
          title={noteItem.title}
          content={noteItem.content}
        />
      ))}
    </div>
  );
}

export default Note;
