// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { updateTextActionCreator } from '../actions/actions.js';

// const WritingPane = ({ 
//   handleChange
//  }) => {
//   const textLine1 = useSelector((state) => state.haikus.textLine1);
//   const textLine2 = useSelector((state) => state.haikus.textLine2);
//   const textLine3 = useSelector((state) => state.haikus.textLine3);
//   const title = useSelector((state) => state.haikus.title);

//   const dispatch = useDispatch();

//   let textLineInput = '';

//   const handleTextLine = (e) => {
//     const wordArr = textLineInput.split(' ');
//     dispatch(updateTextActionCreator(e.target.name, wordArr));
//     document.getElementsByName("writing-pane-field")[0].value = '';
//   }

//   return (
//     <div>
//       <div>Writing Pane</div>
//         <input name="writing-pane-field" type="text" placeholder="Your haiku is here..." onChange={e => textLineInput = e.target.value}/>
//         {/* <input name="title" type="text" placeholder="Title is here..." onChange={handleChange}/> */}
//       <div className="haiku-btn-wrap">
//         <button name="title" onClick={handleTextLine}>Title</button>
//         <button name="textLine1" onClick={handleTextLine}>5</button>
//         <button name="textLine2" onClick={handleTextLine}>7</button>
//         <button name="textLine3" onClick={handleTextLine}>5</button>
//       </div>
//     </div>
//   )
// }

// export default WritingPane;