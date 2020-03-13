import * as types from "./type";

export const initialState = {
  movieList: [],
  searchValue: "",
  error: "",
  loading: false,
  isSearching: false
};

export const reducer = (draft, action) => {
  switch (action.type) {
    case types.CHANGE_MOVIELIST:
      draft.movieList = action.data;
      break;
    case types.CHANGE_SEARCHVALUE:
      draft.searchValue = action.data;
      break;
    case types.CHANGE_ERROR:
      draft.error = action.data;
      break;
    case types.CHANGE_LOADING:
      draft.loading = action.data;
      break;
    case types.CHANGE_ISSEARCHING:
      draft.isSearching = action.data;
      break;
    default:
      return initialState;
  }
};
