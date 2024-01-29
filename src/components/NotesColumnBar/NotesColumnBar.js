import React, { useState, useEffect } from "react";
import './NotesColumnBar.css';
import NotesColumn from '../NotesColumn/NotesColumn';
import NotesColumnBarDivider from "../NotesColumnBarDivider/NotesColumnBarDivider";

function NotesColumnBar({ bar, barIndex, isSelected, isHighlighted, updateBar, onBarClick, settings, setSettings, clipboard, copyToClipboard, pasteFromClipboard, tab }) {
  

    const isBarHighlighted = isHighlighted

    // Update className to include highlighting styles
    const barClassNames = `notes-column-bar ${isSelected ? 'selected-bar' : ''} ${isBarHighlighted ? 'highlighted-bar' : ''}`;


    //This is good, not really related to this class
    const handleNoteUpdate = (columnIndex, noteIndex, newNote) => {
        const updatedBar = { ...bar };
        updatedBar.columns[columnIndex][noteIndex] = newNote;
        updateBar(barIndex, updatedBar);
    };

   

    
    return (
        <div onMouseDown={(e) => onBarClick(barIndex, e.ctrlKey)} // Correctly pass the ctrlKey state
        className={barClassNames}>
            <NotesColumnBarDivider settings={settings} setSettings={setSettings} barIndex={barIndex} />
            {bar.columns.map((column, columnIndex) => (
                <NotesColumn 
                    key={columnIndex} 
                    notes={column} 
                    columnIndex={columnIndex} 
                    updateNote={handleNoteUpdate} 
                    settings={settings} 
                />
            ))}
            {barIndex === tab.length - 1 && <NotesColumnBarDivider settings={settings} barIndex={barIndex + 1} />}
        </div>
    );
}

export default NotesColumnBar;