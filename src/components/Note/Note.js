import React, { useState, useEffect } from 'react';

function Note({ note, id, updateNote }) {
  const initialNoteValue = note === null ? "-" : note;
  const [value, setValue] = useState(initialNoteValue);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (isDragging) {
        const newValue = Math.max(0, Math.min(24, parseInt(value) + event.movementY));
        setValue(newValue);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      
      if (value !== initialNoteValue) {
        updateNote(value);
      }
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, value, initialNoteValue, updateNote, id]);

  const handleMouseDown = () => {
    setIsDragging(true);
    setValue(prevValue => (prevValue === '-' ? '0' : prevValue));
  };

  return (
    <div 
      onMouseDown={handleMouseDown} 
      style={{ cursor: 'pointer', userSelect: 'none', width: '18px', textAlign: 'center' }}
    >
      {value}
    </div>
  );
}

export default Note;
