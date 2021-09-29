// import actionType constants
import * as types from '../constants/actionTypes';

export const updateGifsActionCreator = (gifID, reference) => ({
  type: types.UPDATE_GIFS,
  payload: { gifID, reference },
});

export const updateTextActionCreator = (button, input) => ({
  type: types.UPDATE_TEXT,
  payload: { button, input },
});

export const retrieveHaikuListActionCreator = (haikus) => ({
  type: types.RETRIEVE_HAIKU_LIST,
  payload: haikus,
});

export const retrieveSynonymsActionCreator = (synonyms) => ({
  type: types.RETRIEVE_SYNONYMS,
  payload: synonyms,
});

export const retrieveRhymesActionCreator = (rhymes) => ({
  type: types.RETRIEVE_RHYMES,
  payload: rhymes,
});

export const retrieveUserIDActionCreator = (id) => ({
  type: types.RETRIEVE_USER_ID,
  payload: id,
});

export const retrieveHaikuActionCreator = (haikuInfo) => ({
  type: types.RETRIEVE_HAIKU,
  payload: haikuInfo,
});
