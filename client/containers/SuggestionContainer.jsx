import React, { Component } from 'react';
import SynonymsDisplay from '../components/SynonymsDisplay.jsx';
import RhymesDisplay from '../components/RhymesDisplay.jsx';

function SuggestionContainer() {
  return (
    <div className="App">
      <SynonymsDisplay></SynonymsDisplay>
      <RhymesDisplay></RhymesDisplay>
    </div>
  );
}

export default SuggestionContainer;
