// src/atoms/Button.js
import React, { useState } from "react";
import PropTypes from "prop-types";
import * as colors from "../../../../utils/colors";

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
  fontWeight = "semi-bold",
  fontSize = "inherit",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const customButtonStyle = {
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
    transition: "background-color 0.3s ease-in-out, transform 0.3s ease-in-out",
  };

  const hoverStyle = {
    transform: "scale(1.06)",
  };

  return (
    <button
      style={{ ...customButtonStyle, ...(isHovered && hoverStyle) }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      type="image"
    >
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

export default Button;
