import React from "react";

const SVGtext = ({ label, icon }) => {
  return (
    <p className="flex flex-row gap-2 items-center">
      {icon && React.cloneElement(icon, { width: "1.5rem", height: "1.5rem" })}
      {label}
    </p>
  );
};

export default SVGtext;
