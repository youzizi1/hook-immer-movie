import React, { memo, useState } from "react";

import Header from "./components/header";
import Search from "./components/search";
import Movie from "./components/movie";
import { getSearchUrl } from "../../config";

const Home = () => {
  const [movieList, setMovieList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const search = () => {
    if (!searchValue) {
      alert("请输入电影名称后再进行搜索");
      return;
    }

    setError("");
    setLoading(true);
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
      });
  };

  const getSearchValue = searchValue => {
    setSearchValue(searchValue);
  };

  return (
    <div>
      <Header title="Movie App" />
      <Search search={search} getSearchValue={getSearchValue} />
      <HandleMovie loading={loading} error={error} movieList={movieList} />
    </div>
  );
};

const HandleMovie = ({ loading, error, movieList }) => {
  if (loading) {
    return <div>加载中...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return <Movie movieList={movieList} />;
};

export default memo(Home);
