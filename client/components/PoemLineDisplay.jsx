import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { retrieveSynonymsActionCreator, retrieveRhymesActionCreator } from '../actions/actions.js'

function PoemLineDisplay() {
  const textLine1 = useSelector((state) => state.haikus.textLine1);
  const textLine2 = useSelector((state) => state.haikus.textLine2);
  const textLine3 = useSelector((state) => state.haikus.textLine3);
  const title = useSelector((state) => state.haikus.title);

  const dispatch = useDispatch();

  const createButtons = (inputArr) => {
    return inputArr.map((word, idx) => {
      return <button key={word.concat(idx)} value={word} onClick={(e) => fetchRhymes(e.target.value)}>{word}</button>
    });
  }

  const fetchRhymes = (word) => {
    // Make a get request to the server encoding word to the key "word"
    let response;
    const rhymeStrings = [];
    fetch("dict", {
      method: "POST",
      body: JSON.stringify({
        'word': word
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then(data => data.json())
      .then(data => {
        console.log(data);
        response = data;
        return response;
      }).then(response => {
        response.rhymes.forEach(element => {
          rhymeStrings.push(element.word);
        });
        console.log(rhymeStrings);
        dispatch(retrieveRhymesActionCreator(rhymeStrings));
        dispatch(retrieveSynonymsActionCreator(response.synonyms));
      });
  }

  return (
    <div className="poemLineDisplay">
      <div className="title">Title: {createButtons(title)}</div>
      <div className="line1">Line 1: {createButtons(textLine1)}</div>
      <div className="line2">Line 2: {createButtons(textLine2)}</div>
      <div className="line3">Line 3: {createButtons(textLine3)}</div>
    </div>
  );
}

export default PoemLineDisplay;
