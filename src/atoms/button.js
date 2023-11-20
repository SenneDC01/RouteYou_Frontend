// src/atoms/Button.js
import React from "react";
import PropTypes from "prop-types";
import * as colors from "../utils/colors";

// Warning: Button: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.
const Button = ({
  label = "Click me",
  backgroundColor = colors.green,
  borderColor = colors.green,
  fontColor = colors.white,
  borderRadius = 5,
  icon = null,
  width = "100px",
  height = "50px",
  fontStyle = "Inter",
  fontWeight = "bold",
  fontSize = "inherit",
}) => {
  const buttonStyle = {
    backgroundColor: backgroundColor,
    borderColor: borderColor,
    borderWidth: 3,
    borderRadius: borderRadius,
    color: fontColor,
    width: width,
    height: height,
    fontStyle: fontStyle,
    fontWeight: fontWeight,
    fontSize: fontSize,
    textTransform: "uppercase",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <button style={buttonStyle}>
      {icon && React.cloneElement(icon, { width: "40px", height: "20px" })}
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  borderRadius: PropTypes.number,
  fontColor: PropTypes.string,
  icon: PropTypes.element,
  width: PropTypes.string,
  height: PropTypes.string,
  fontStyle: PropTypes.string,
  fontWeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  fontSize: PropTypes.string,
};

// Button.defaultProps = {
//     label: 'Click me',
//     backgroundColor: colors.green,
//     borderColor: colors.green,
//     fontColor: colors.white,
//     borderRadius: 5,
//     icon: null,
//     width: '100px',
//     height: '50px',
//     fontStyle: 'Inter',
//     fontWeight: 'bold',
//     fontSize: 'inherit'
// };

export default Button;
