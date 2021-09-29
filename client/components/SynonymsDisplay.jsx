import React, { Component } from 'react';
import { useSelector } from 'react-redux';

function SynonymsDisplay() {
  const syns = useSelector((state) => state.haikus.synonyms);

  const populateSyns = (syns) => {
    return syns.map((syn, idx) => {
      return <button key={syn.concat(idx)} value={syn} onClick={() => console.log(syn)}>{syn}</button>
    })
  }

  return  (
    <div className="rhymes">
      <h3>Synonyms</h3>
      {populateSyns(syns)}
    </div>
  );
}

export default SynonymsDisplay;
