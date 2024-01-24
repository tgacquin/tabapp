import React from "react";
import './TabEditorToolBar.css'
import Button from "../Button/Button";

function TabEditorToolBar({addBarFunction}) {
    return (
        <div className="toolbar">
            <Button color="blue" symbol="+" onClick={addBarFunction}></Button>
        </div>
    );
}

export default TabEditorToolBar;