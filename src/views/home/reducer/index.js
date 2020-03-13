import * as types from "./type";

export const initialState = {
  movieList: [],
  searchValue: "",
  error: "",
  loading: false,
  isSearching: false
};

export const reducer = (state, action) => {
  switch (action.type) {
    case types.CHANGE_MOVIELIST:
      return {
        ...state,
        movieList: action.data
      };
    case types.CHANGE_SEARCHVALUE:
      return {
        ...state,
        searchValue: action.data
      };
    case types.CHANGE_ERROR:
      return {
        ...state,
        error: action.data
      };
    case types.CHANGE_LOADING:
      return {
        ...state,
        loading: action.data
      };
    case types.CHANGE_ISSEARCHING:
      return {
        ...state,
        isSearching: action.data
      };
    default:
      return state;
  }
};
