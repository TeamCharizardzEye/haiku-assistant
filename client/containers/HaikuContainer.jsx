import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTextActionCreator, updateGifsActionCreator } from '../actions/actions.js';
// import WritingPane from '../components/WritingPane.jsx';
import PoemLineDisplay from '../components/PoemLineDisplay.jsx';
import { TextField } from '@material-ui/core';

// const dataObj = {
//   "_id": "6153ae6ec2eed9ce28d1f72f",
//   "title": "Kitty",
//   "textLine1": [
//     "The",
//     "cat",
//     "is",
//     "fluffy"
//   ],
//   "textLine2": [
//     "Her",
//     "soft",
//     "fur",
//     "shimmers",
//     "in",
//     "grey"
//   ],
//   "textLine3": [
//     "She",
//     "is",
//     "Beyonce"
//   ],
//   "associatedUserID": "Matt17",
//   "public": false,
//   "rating": "",
//   "gifs": [
//     "",
//     "",
//     ""
//   ],
//   "__v": 0
// }

const WritingPane = ({ 
  handleChange
 }) => {
  const textLine1 = useSelector((state) => state.haikus.textLine1);
  const textLine2 = useSelector((state) => state.haikus.textLine2);
  const textLine3 = useSelector((state) => state.haikus.textLine3);
  const title = useSelector((state) => state.haikus.title);

  const dispatch = useDispatch();

  let textLineInput = '';

  const handleTextLine = (e) => {
    const wordArr = textLineInput.split(' ');
    let response;

    dispatch(updateTextActionCreator(e.target.name, wordArr));

    if (e.target.name !== 'title') {
      fetch("gifs", {
        method: "POST",
        body: JSON.stringify({
          'phrase': textLineInput
        }),
        headers: { "Content-Type": "application/json" },
      })
        .then(data => data.json())
        .then(data => {
          console.log(data, e.target.name);
          response = data;
          return response;
        }).then(response => {
          dispatch(updateGifsActionCreator(e.target.name, response));
        });
    }

    document.getElementsByName("writing-pane-field")[0].value = '';
  }

  return (
    <div>
      <h1 id="title-logo">Haiqoo!</h1>
        {/* <TextField label="Your haiku is here..." variant="outlined" name="writing-pane-field" type="text" onChange={e => textLineInput = e.target.value}/> */}
        <input id="writing-pane-field" name="writing-pane-field" type="text" placeholder="Your haiku is here..." onChange={e => textLineInput = e.target.value}/>
        {/* <input name="title" type="text" placeholder="Title is here..." onChange={handleChange}/> */}
      <div className="haiku-btn-wrap">
        <button name="title" onClick={handleTextLine}>Title</button>
        <button name="textLine1" onClick={handleTextLine}>5</button>
        <button name="textLine2" onClick={handleTextLine}>7</button>
        <button name="textLine3" onClick={handleTextLine}>5</button>
      </div>
    </div>
  )
}

const SaveButton = ({ handleSave }) => {
  return (
    <div>
      <button id="save-btn" onClick={handleSave}>Save Haiku</button>
    </div>
  )
}

const HaikuContainer = () => {
  const [title, setTitle] = useState('');
  const handleChange = (e) => setTitle(e.target.value)

  const handleSave = () => {
    console.log('saved')
  }

  return (
    <div className="haiku-container">
      <WritingPane />
      <PoemLineDisplay />
      <SaveButton />
    </div>
  )
}

export default HaikuContainer;