import React from "react";
import './NotesColumnBar.css'
import NotesColumn from '../NotesColumn/NotesColumn'
import NotesColumnBarDivider from "../NotesColumnBarDivider/NotesColumnBarDivider";

function NotesColumnBar({bar, barIndex, updateBar}) {

    const handleNoteUpdate = (columnIndex, noteIndex, newNote) => {
        const updatedBar = { ...bar };
        updatedBar.columns[columnIndex][noteIndex] = newNote;
        updateBar(barIndex, updatedBar);
    };

    return (
        <div className="notes-column-bar">
            <NotesColumnBarDivider></NotesColumnBarDivider>
            {bar.columns.map((column, columnIndex) => (
                <NotesColumn key={columnIndex} notes={column} columnIndex={columnIndex} updateNote={handleNoteUpdate} />
            ))}
        </div>
    );
}

export default NotesColumnBar;