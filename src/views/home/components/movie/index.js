import React, { memo } from "react";

import styles from "./movie.module.css";

const Movie = ({ movieList }) => {
  return (
    <div className={styles.movie}>
      <MovieList movieList={movieList} />
    </div>
  );
};

const MovieList = ({ movieList }) => {
  if (movieList && movieList.length) {
    return (
      <>
        {movieList.map(movie => {
          return (
            <div className={styles.item} key={movie.imdbID}>
              <div className={styles.title}>
                电影名称：
                {movie.Title}
              </div>
              <div className={styles.poster}>
                <img
                  src={movie.Poster}
                  alt={movie.title}
                  className={styles.img}
                />
              </div>
              <div className={styles.time}>
                上映时间：
                {movie.Year}
              </div>
              <div className={styles.type}>
                电影类型：
                {movie.Type}
              </div>
            </div>
          );
        })}
      </>
    );
  }

  return <div>暂时没有数据</div>;
};

export default memo(Movie);
