import React, { memo } from "react";
import PropTypes from "prop-types";

import styles from "./header.module.css";

const Header = ({ title }) => {
  return (
    <div className={styles.header}>
      <h1>{title}</h1>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default memo(Header);
