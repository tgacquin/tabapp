import React, {useEffect, useState} from 'react';
import NotesColumnBar from '../NotesColumnBar/NotesColumnBar'
function TabEditorMakeTab({tab, setTab}) {

    const handleUpdateBar = (barIndex, updatedBar) => {
        const updatedTab = [...tab];
        updatedTab[barIndex] = updatedBar;
        setTab(updatedTab);
    };

    return (
        <div>
            {tab.map((bar, index) => (
                <NotesColumnBar key={index} bar={bar} barIndex={index} updateBar={handleUpdateBar} />
            ))}
        </div>
    );
}
export default TabEditorMakeTab;