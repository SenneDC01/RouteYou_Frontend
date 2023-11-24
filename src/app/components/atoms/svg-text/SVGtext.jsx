// src/atoms/Button.js
import React from "react";
import PropTypes from "prop-types";

const SVGtext = ({ label = "label", icon = null }) => {
  return (
    <p className="flex flex-row gap-2 items-center">
      {icon && React.cloneElement(icon, { width: 25, height: 25 })}
      {label}
    </p>
  );
};

SVGtext.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.element,
};

export default SVGtext;
