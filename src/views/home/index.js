import React, { memo, useState } from "react";

import Header from "./components/header";
import Search from "./components/search";
import Movie from "./components/movie";
import Loading from "../../base/loading";
import ErrorComponent from "../../base/error";
import { getSearchUrl } from "../../config";

const Home = () => {
  const [movieList, setMovieList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const search = () => {
    if (!searchValue) {
      alert("请输入电影名称后再进行搜索");
      return;
    }

    setError("");
    setLoading(true);
    setIsSearching(true);
    fetch(getSearchUrl(searchValue))
      .then(res => res.json())
      .then(res => {
        if (res.Response === "True") {
          setMovieList(res.Search);
        } else {
          setError(res.Error);
        }
      })
      .catch(err => {
        setError("请求失败");
      })
      .finally(() => {
        setLoading(false);
        setIsSearching(false);
      });
  };

  const getSearchValue = searchValue => {
    setSearchValue(searchValue);
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
