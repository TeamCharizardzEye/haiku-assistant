import React, { Component } from 'react';
import { useSelector } from 'react-redux';

function GifWindow() {
  const gif1 = useSelector((state) => state.haikus.gif1);
  const gif2 = useSelector((state) => state.haikus.gif2);
  const gif3 = useSelector((state) => state.haikus.gif3);

  return (
    <div className="gif-window">
      <p><img src={gif1}/></p>
      <p><img src={gif2}/></p>
      <p><img src={gif3}/></p>
    </div>
  );
}

export default GifWindow;
