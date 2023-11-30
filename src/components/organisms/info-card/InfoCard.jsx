"use client";
import React from "react";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import PropTypes from "prop-types";

const InfoCard = ({ icon = null, text = "label" }) => {
  return (
    <div className="flex justify-center gap-2">
      <Card className="py-4 shadow-md">
        <CardBody className="flex items-center overflow-visible py-2">
          {icon && React.cloneElement(icon, { width: "10em", height: "5em" })}
        </CardBody>
        <CardFooter className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny">{text}</p>
        </CardFooter>
      </Card>
    </div>
  );
};

InfoCard.propTypes = {
  icon: PropTypes.element,
  text: PropTypes.string,
};
export default InfoCard;
