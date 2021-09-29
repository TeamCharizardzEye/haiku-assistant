import React, { Component } from 'react';
import { useSelector } from 'react-redux';

function RhymesDisplay() {
  const rhymes = useSelector((state) => state.haikus.rhymes);

  const populateRhymes = (rhymes) => {
    return rhymes.map((rhyme, idx) => {
      return <button key={rhyme.concat(idx)} value={rhyme} onClick={() => console.log(rhyme)}>{rhyme}</button>
    })
  }

  return  (
    <div className="rhymes">
      <h3>Rhymes</h3>
      {populateRhymes(rhymes)}
    </div>
  );
}

export default RhymesDisplay;
