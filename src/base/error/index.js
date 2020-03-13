import React, { memo } from "react";
import PropTypes from "prop-types";

const ErrorComponent = ({ error }) => <div>{error}</div>;

ErrorComponent.propTypes = {
  error: PropTypes.string.isRequired
};

export default memo(ErrorComponent);
