import React from 'react';
import Note from '../Note/Note';
import './NotesColumn.css'; 



function NotesColumn({ notes, columnIndex, updateNote }) {
    return (
        <div className="notes-column">
            {notes.map((note, noteIndex) => (
                <Note key={noteIndex} note={note} updateNote={(newNote) => {
                  console.log(columnIndex, noteIndex, newNote);
                  updateNote(columnIndex, noteIndex, newNote);
                }} />
            ))}
        </div>
    );
}

export default NotesColumn;