import { db } from "../../db";
import { ActionTypes } from "../constants/actionTypes";

const initialState = [
  {
    id: "1",
    artist: "A.R. Rahman",
    album_title: "Mix",
    album_cover: "",
    songs: ["Maa_Tujhe_Salam", "Tere_Bina", "Chal_Chhaiyya_Chhaiya", "Jai_Ho"],
  },
  {
    id: "2",
    artist: "A.R. Rahman",
    album_title: "RockStar",
    album_cover: "02.png",
    songs: ["kun_faya_kun", "Tum_Ho", "Nadaan_Parindey", "Hawa_Hawa"],
  },
  {
    id: "3",
    artist: "A.R. Rahman",
    album_title: "Tamasha",
    album_cover: "02.png",
    songs: [
      "Agar_Tum_Sath_Ho",
      "Matargashti",
      "Heer to badi sad hai",
      "wat wat wat",
    ],
  },
  {
    id: "4",
    artist: "A.R. Rahman",
    album_title: "Delhi-6",
    album_cover: "02.png",
    songs: ["Masakkali", "Rehna Tu", "Genda Fool", "Arziyan"],
  },
];
export const albumReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ALBUM:
      return [...state, payload];

    default:
      return state;
  }
};

export const selectedAlbumReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_ALBUM:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_ALBUM:
      return {};

    default:
      return state;
  }
};
