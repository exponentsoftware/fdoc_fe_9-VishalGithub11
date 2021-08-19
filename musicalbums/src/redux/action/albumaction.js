import { ActionTypes } from "../constants/actionTypes";
export const setAlbum = (albums) => {
  return {
    type: ActionTypes.SET_ALBUM,
    payload: albums,
  };
};

export const selectedAlbum = (album) => {
  return {
    type: ActionTypes.SELECTED_ALBUM,
    payload: album,
  };
};

export const removeSelectedAlbum = (album) => {
  return {
    type: ActionTypes.REMOVE_ALBUM,
  };
};
