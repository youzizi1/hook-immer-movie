import React, { memo } from "react";
import { useImmerReducer } from "use-immer";

import Header from "./components/header";
import Search from "./components/search";
import Movie from "./components/movie";
import Loading from "../../base/loading";
import ErrorComponent from "../../base/error";
import { getSearchUrl } from "../../config";
import { reducer, initialState } from "./reducer";
import * as types from "./reducer/type";

const Home = () => {
  const [state, dispatch] = useImmerReducer(reducer, initialState);
  const { movieList, searchValue, error, loading, isSearching } = state;

  const search = () => {
    if (!searchValue) {
      alert("请输入电影名称后再进行搜索");
      return;
    }

    dispatch({ type: types.CHANGE_ERROR, data: "" });
    dispatch({ type: types.CHANGE_LOADING, data: true });
    dispatch({ type: types.CHANGE_ISSEARCHING, data: true });
    fetch(getSearchUrl(searchValue))
      .then(res => res.json())
      .then(res => {
        if (res.Response === "True") {
          dispatch({ type: types.CHANGE_MOVIELIST, data: res.Search });
        } else {
          dispatch({ type: types.CHANGE_ERROR, data: res.Error });
        }
      })
      .catch(err => {
        dispatch({ type: types.CHANGE_ERROR, data: "请求失败" });
      })
      .finally(() => {
        dispatch({ type: types.CHANGE_LOADING, data: false });
        dispatch({ type: types.CHANGE_ISSEARCHING, data: false });
      });
  };

  const getSearchValue = searchValue => {
    dispatch({ type: types.CHANGE_SEARCHVALUE, data: searchValue });
  };

  return (
    <div>
      <Header title="Movie App" />
      <Search
        search={search}
        getSearchValue={getSearchValue}
        isSearching={isSearching}
      />
      <HandleMovie loading={loading} error={error} movieList={movieList} />
    </div>
  );
};

const HandleMovie = ({ loading, error, movieList }) => {
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <ErrorComponent error={error} />;
  }
  return <Movie movieList={movieList} />;
};

export default memo(Home);
