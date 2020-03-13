import React, { memo, useState } from "react";

import styles from "./search.module.css";

const Search = ({ search, getSearchValue }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = e => {
    setSearchValue(e.target.value);
    getSearchValue(e.target.value);
  };

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="请输入电影名"
        className={styles.input}
        value={searchValue}
        onChange={handleChange}
      />
      <button className={styles.btn} onClick={search}>
        search
      </button>
    </div>
  );
};

export default memo(Search);
