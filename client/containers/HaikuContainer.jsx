import React, { Component } from 'react';
import WritingPane from '../components/WritingPane.jsx';
import SaveButton from '../components/SaveButton.jsx';
import PoemLineDisplay from '../components/PoemLineDisplay.jsx';

function HaikuContainer() {
  return (
    <div className="App">
      <WritingPane></WritingPane>
      <PoemLineDisplay></PoemLineDisplay>
      <SaveButton></SaveButton>
    </div>
  );
}

export default HaikuContainer;
