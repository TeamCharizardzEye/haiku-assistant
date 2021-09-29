import * as types from '../constants/actionTypes';

const initialState = {
  title: [],
  textLine1: [],
  textLine2: [],
  textLine3: [],
  userID: '',
  synonyms: [],
  rhymes: [],
  savedHaikusList: [],
  gif1: '',
  gif2: '',
  gif3: '',
};

const haikusReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_GIFS: {
      const gifId = action.payload.gifID;
      const reference = action.payload.reference;

      //check what gif ID is and reassign it in state
      if (gifId === 'textLine1') {
        return {
          ...state,
          gif1: reference,
        };
      } else if (gifId === 'textLine2') {
        return {
          ...state,
          gif2: reference,
        };
      } else if (gifId === 'textLine3') {
        return {
          ...state,
          gif3: reference,
        };
      } else {
        console.log(gifId, reference);
        return {
          ...state,
        };
      }
      break;
    }

    /////////////////////////////////////////////////////////

    case types.UPDATE_TEXT: {
      const button = action.payload.button;
      const input = action.payload.input;

      if (button === 'textLine1') {
        return {
          ...state,
          textLine1: input,
        };
      } else if (button === 'textLine2') {
        return {
          ...state,
          textLine2: input,
        };
      } else if (button === 'textLine3') {
        return {
          ...state,
          textLine3: input,
        };
      } else if (button === 'title') {
        return {
          ...state,
          title: input,
        };
      }
      break;
    }

    ////////////////////////////////////////////////////

    case types.RETRIEVE_HAIKU_LIST: {
      const haikuList = action.payload;

      return {
        ...state,
        savedHaikusList: haikuList,
      };
    }

    ////////////////////////////////////////////////////////

    case types.RETRIEVE_SYNONYMS: {
      const newSynonyms = action.payload;

      return {
        ...state,
        synonyms: newSynonyms,
      };
    }

    //////////////////////////////////////////////////////////

    case types.RETRIEVE_RHYMES: {
      const newRhymes = action.payload;

      return {
        ...state,
        rhymes: newRhymes,
      };
    }
    ///////////////////////////////////////////////////////////

    case types.RETRIEVE_USER_ID: {
      const id = action.payload;

      return {
        ...state,
        userID: id,
      };
    }

    /////////////////////////////////////////////////////////////

    case types.RETRIEVE_HAIKU: {
      const haikuInfo = action.payload;

      //we can pull the specific haiku info and reassign the properties
      //in state

      return {
        ...state,
        title: '',
        textLine1: [],
        textLine2: [],
        textLine3: [],
      };
    }

    default:
      return state;
  }
};

export default haikusReducer;
