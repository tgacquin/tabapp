import React from 'react';
import ReactDOM from 'react-dom/client';
import TabEditor from './components/TabEditor/TabEditor';
import RightColumn from './components/RightColumn/RightColumn';
import LeftColumn from './components/LeftColumn/LeftColumn';
import './MainLayout.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="main-layout">
      <div className="left-column">
        <LeftColumn />
      </div>
      <div className="tab-editor">
        <TabEditor />
      </div>
      <div className="right-column">
        <RightColumn />
      </div>
  </div>
);

