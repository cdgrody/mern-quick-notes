import { useState, useEffect } from "react";
import NoteForm from "../../components/NoteForm/NoteForm";
import NoteCard from "../../components/NoteCard/NoteCard";
import * as notesService from "../../utilities/notes-service";

export default function NotesList({ notes, user, handleNoteAdded }) {

  return (
    <>
      <NoteForm user={user} handleNoteAdded={handleNoteAdded}/>
      <hr />
      {notes.length ? (
        <ul>
          {notes.map((note, idx) => (
            <NoteCard note={note} key={idx} />
          ))}
        </ul>
      ) : (
        <div>No Notes Yet</div>
      )}
    </>
  );
}
