import React, { useState } from "react";
import './TabEditorToolBar.css';
import { BsCursor, BsPlus, BsPencilSquare, BsPlayFill, BsZoomIn, BsZoomOut } from "react-icons/bs";

function TabEditorToolBar({addBarFunction, settings, setEditorSettings}) {
    const [zoomEffect, setZoomEffect] = useState(false);

    const enableEditMode = () => {
        setEditorSettings(currentState => ({
            ...currentState,
            editmode: true
        }));
    };

    const disableEditMode = () => {
        setEditorSettings(currentState => ({
            ...currentState,
            editmode: false
        }));
    };

    const handleZoomClick = () => {
        setZoomEffect(true);
        setTimeout(() => setZoomEffect(false), 1000); // Matches the animation duration
    };

    return (
        <div className="toolbar">
            <BsPlus size="2rem" onClick={addBarFunction}></BsPlus>
            <BsPlayFill size="2rem"></BsPlayFill>
            <div className="tool-horizontal-group">
                <div className="tool-icon">
                    {settings.editmode && <div className="icon-background"></div>}
                    <BsPencilSquare size="2rem" onClick={enableEditMode}></BsPencilSquare>
                </div>
                <div className="tool-icon">
                    {!settings.editmode && <div className="icon-background"></div>}
                    <BsCursor size="2rem" onClick={disableEditMode}></BsCursor>
                </div>
            </div>
            <div className="tool-horizontal-group">
                <div className="tool-icon" onClick={handleZoomClick}>
                    {zoomEffect && <div className={`icon-background ${zoomEffect ? 'fade-out' : ''}`}></div>}
                    <BsZoomIn size="2rem"></BsZoomIn>
                </div>
                <div className="tool-icon" onClick={handleZoomClick}>
                    {zoomEffect && <div className={`icon-background ${zoomEffect ? 'fade-out' : ''}`}></div>}
                    <BsZoomOut size="2rem"></BsZoomOut>
                </div>
            </div>
        </div>
    );
}

export default TabEditorToolBar;
