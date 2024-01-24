import React, { useState, useEffect } from 'react';
import TabEditorSongInfo from '../TabEditorSongInfo/TabEditorSongInfo'
import TabEditorMakeTab from '../TabEditorMakeTab/TabEditorMakeTab'
import TabEditorToolBar from '../TabEditorToolBar/TabEditorToolBar'
import './TabEditor.css'
function TabEditor() {

    //A tab consists of bars, which can be any length, time signature, etc...
    const [tab, setTab] = useState([]);

    useEffect(() => {
        console.log(tab)
    }, [tab])

    const [addBarSettings, setAddBarSettings] = useState({numofbeats: 16, placeatposition: tab.length})

    const addBar = () => {
        //Set the properties of the bar we're about to add
        const barToAdd = {
            columns: new Array(addBarSettings.numofbeats).fill(null).map(() => new Array(6).fill(null)),
            position: addBarSettings.placeatposition
        };
        //Add the bar to our tab
        setTab([...tab, barToAdd]);

        setAddBarSettings(currentState => ({
            ...currentState,
            position: tab.length
        }))
    };

    return (
      <div className="tab-editor-wrapper">
          <TabEditorSongInfo />
          <div>
                {tab.length > 0 ? <TabEditorMakeTab tab={tab} setTab={setTab}/> : "Press + to start making your tab"}
          </div>
          <TabEditorToolBar addBarFunction={addBar} />
      </div>
    );
}

export default TabEditor;