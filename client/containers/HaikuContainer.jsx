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

const WritingPane = ({ handleChange }) => {
  return (
    <div>
      <div>Writing Pane</div>
      <label>
        <input name="title" type="text" placeholder="Title is here..." onChange={handleChange}/>
      </label>
      <div className="haiku-btn-wrap">
        <button>5</button>
        <button>7</button>
        <button>5</button>
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
      <PoemLineDisplay />
      <SaveButton 
        handleSave={handleSave} 
      />
    </div>
  )
}

export default HaikuContainer;