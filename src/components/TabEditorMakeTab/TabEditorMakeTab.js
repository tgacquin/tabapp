import React from 'react';
import NotesColumnBar from '../NotesColumnBar/NotesColumnBar';
import '../TabEditorMakeTab/TabEditorMakeTab.css';

function TabEditorMakeTab({ tab, setTab, settings, setSettings, clipboard, highlightedBars, setHighlightedBars, copyToClipboard, pasteFromClipboard, selectedBarIndex, setSelectedBarIndex}) {
    
    const handleBarMouseDown = (barIndex, isCtrlPressed) => {
        if (isCtrlPressed && settings.editmode === false) {
            setHighlightedBars(prev => {
                const newSet = new Set(prev);
                if (newSet.has(barIndex)) {
                    newSet.delete(barIndex);
                } else {
                    newSet.add(barIndex);
                }
                return newSet;
            });
    
            // Only update the selected bar index if there are highlighted bars
            if (highlightedBars.size > 0) {
                const maxIndex = Math.max(...Array.from(highlightedBars), barIndex);
                setSelectedBarIndex(maxIndex);
            } else {
                setSelectedBarIndex(barIndex);
            }
        } else {
            setSelectedBarIndex(barIndex);
            setHighlightedBars(new Set()); //Clear highlighted bars if not a Ctrl+click
        }
    };
    
    const handleUpdateBar = (barIndex, updatedBar) => {
        const updatedTab = [...tab];
        updatedTab[barIndex] = updatedBar;
        setTab(updatedTab);
    };

    return (
        <div className="make-tab-wrapper">
            {tab.map((bar, index) => (
                <NotesColumnBar
                    key={bar.id}
                    bar={bar}
                    barIndex={index}
                    isSelected={index === selectedBarIndex}
                    isHighlighted={highlightedBars.has(index)}
                    updateBar={handleUpdateBar}
                    onBarClick={handleBarMouseDown} 
                    settings={settings}
                    setSettings={setSettings}
                    clipboard={clipboard}
                    copyToClipboard={copyToClipboard}
                    pasteFromClipboard={pasteFromClipboard}
                    tab={tab}
                />
            ))}
        </div>
    );
}

export default TabEditorMakeTab;
