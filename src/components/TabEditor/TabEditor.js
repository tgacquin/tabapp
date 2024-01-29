import React, { useState, useEffect, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TabEditorSongInfo from '../TabEditorSongInfo/TabEditorSongInfo'
import TabEditorMakeTab from '../TabEditorMakeTab/TabEditorMakeTab'
import TabEditorToolBar from '../TabEditorToolBar/TabEditorToolBar'
import './TabEditor.css'

function TabEditor() {

    const [tab, setTab] = useState([]);
    const [selectedBarIndex, setSelectedBarIndex] = useState(null);
    const [highlightedBars, setHighlightedBars] = useState(new Set());


    //Other shit//
    const [editorSettings, setEditorSettings] = useState({numofbeats: 16,
        editmode: true, playmode: false, cursorposition: 0})

    //Clipboard shit//
    const [clipboard, setClipboard] = useState([]); 

 

    const copyToClipboard = useCallback(() => {
        const barsToCopy = Array.from(highlightedBars).map(index => tab[index]);
        if (barsToCopy.length === 0 && selectedBarIndex !== null) {
            setClipboard([tab[selectedBarIndex]]);
        } else {
            setClipboard(barsToCopy);
        }
    }, [highlightedBars, selectedBarIndex, tab]);

    const pasteFromClipboard = useCallback(() => {
        const pastedBars = clipboard.map(bar => ({
            ...bar, 
            id: uuidv4() 
        }));

        const updatedTab = [
            ...tab.slice(0, selectedBarIndex + 1),
            ...pastedBars, 
            ...tab.slice(selectedBarIndex + 1)
        ];
        setTab(updatedTab);
    }, [clipboard, selectedBarIndex, tab]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.ctrlKey && e.key === 'c') {
                copyToClipboard();
            } else if (e.ctrlKey && e.key === 'v') {
                pasteFromClipboard();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [copyToClipboard, pasteFromClipboard]);
    const addBar = () => {
        const barToAdd = {
            columns: new Array(editorSettings.numofbeats).fill(null).map(() => new Array(6).fill(null)),id: uuidv4(),
        };
    
        // Insert the bar into the tab array at the position after the cursor
        const updatedTab = [
            ...tab.slice(0, selectedBarIndex + 1),
            barToAdd,
            ...tab.slice(selectedBarIndex + 1)
        ];


    
        setTab(updatedTab);
    
        // Optionally, update the cursor position to be after the newly added bar
        setSelectedBarIndex(selectedBarIndex + 1)
    };
    

    return (
      <div className="tab-editor-wrapper">
          <TabEditorSongInfo />
          <div>
                {tab.length > 0 ? <TabEditorMakeTab tab={tab} setTab={setTab} 
                settings={editorSettings} setSettings={setEditorSettings}
                highlightedBars={highlightedBars} setHighlightedBars={setHighlightedBars} clipboard={clipboard} copyToClipboard={copyToClipboard} pasteFromClipboard={pasteFromClipboard}
                selectedBarIndex={selectedBarIndex} setSelectedBarIndex={setSelectedBarIndex}/> : "Press + to start making your tab"}
          </div>
          <TabEditorToolBar addBarFunction={addBar} settings={editorSettings} setEditorSettings={setEditorSettings} />
      </div>
    );
}

export default TabEditor;