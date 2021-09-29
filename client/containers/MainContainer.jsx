import React, { Component } from 'react';
import AuthenticationContainer from './AuthenticationContainer.jsx';
import GifContainer from './GifContainer.jsx';
import HaikuContainer from './HaikuContainer.jsx';
import SuggestionContainer from './SuggestionContainer.jsx';

function MainContainer() {
  return (
    <div className="App">
      <AuthenticationContainer></AuthenticationContainer>
      <GifContainer></GifContainer>
      <HaikuContainer></HaikuContainer>
      <SuggestionContainer></SuggestionContainer>
    </div>
  );
}

export default MainContainer;
