import React, { useState, useEffect } from 'react';

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
  const [textLine, setTextLine] = useState('');
  const [textLine1, setTextLine1] = useState([]);
  const [textLine2, setTextLine2] = useState([]);
  const [textLine3, setTextLine3] = useState([]);
  const textLineInput = document.getElementsByName("writing-pane-field").value

  const handleTextLine = (e) => {
    const wordArr = textLine.split(' ')
    if (e.target.name === "textline-1") {
      
      console.log(wordArr, 'wordArr ')
      setTextLine1([...wordArr])
      console.log(textLine1, '1')
        console.log(textLineInput, 'input')
        console.log(textLineInput, "textline-1")

    } else if (e.target.name === "textline-2") {
      console.log(e.target.value, "textline-2")
    } else if (e.target.name === "textline-3") {
      console.log(e.target.value)
    }
  }

  return (
    <div>
      <div>Writing Pane</div>
        <input name="writing-pane-field" type="text" placeholder="Your haiku is here..." onChange={e => setTextLine(e.target.value)}/>
        <input name="title" type="text" placeholder="Title is here..." onChange={handleChange}/>
      <div className="haiku-btn-wrap">
        <button name="textline-1" onClick={handleTextLine}>5</button>
        <button name="textline-2" onClick={handleTextLine}>7</button>
        <button name="textline-3" onClick={handleTextLine}>5</button>
      </div>
    </div>
  )
}

const PoemLineDisplay = () => {
  return (
    <div>
      <input type="text" />
    </div>
  )
}

const SaveButton = ({ handleSave }) => {
  return (
    <div>
      <button onClick={handleSave}>Save Haiku</button>
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
      <WritingPane 
        handleChange={handleChange}
      />
      <PoemLineDisplay 
      />
      <SaveButton 
        handleSave={handleSave} 
      />
    </div>
  )
}

export default HaikuContainer;