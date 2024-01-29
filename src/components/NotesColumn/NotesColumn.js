import React from 'react';
import Note from '../Note/Note';
import './NotesColumn.css'; 



function NotesColumn({ notes, columnIndex, updateNote, settings }) {
    const columnClass = settings.editmode ? "notes-column notes-column-hover" : "notes-column";

    return (
        <div className={columnClass}>
            {notes.map((note, noteIndex) => (
                <Note key={noteIndex} note={note} updateNote={(newNote) => {
                  updateNote(columnIndex, noteIndex, newNote);
                }} settings={settings}/>
            ))}
        </div>
    );
}

export default NotesColumn;