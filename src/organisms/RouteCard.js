"use client";
import React from "react";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import PropTypes from "prop-types";

const RouteCard = ({
  image,
  title = "label",
  afstand = "200km",
  hoogte = "1500m",
  gemStijgingsPercentage = "1,6%",
  tijd = "5:23:45",
  maxStijgingsPercentage = "14,4%",
  moeilijkheid = "Hard",
}) => {
  return (
    <div className="flex justify-center gap-2">
      <Card shadow="sm" isPressable onPress={() => console.log("item pressed")}>
        <CardBody className="overflow-visible p-0">
          <Image
            shadow="sm"
            radius="lg"
            height={200}
            width={200}
            alt={title}
            className="w-full object-cover"
            src={image}
          />
          <div className={"flex justify-center font-semibold"}>{title}</div>{" "}
          {/*font-bold werkt niet font-semibold wel*/}
          <div className="flex justify-center flex-row gap-1">
            <div className="flex flex-col gap-1">
              <p>{afstand}</p>
              <p>{hoogte}</p>
              <p>{gemStijgingsPercentage}</p>
            </div>
            <div className="flex flex-col gap-1">
              <p>{tijd}</p>
              <p>{maxStijgingsPercentage}</p>
              <p>{moeilijkheid}</p>
            </div>
          </div>
        </CardBody>

        {/*<CardFooter className="text-small justify-between">
          <b>{title}</b>
          <p className="text-default-500">{afstand}</p>
        </CardFooter>*/}
      </Card>
    </div>
  );
};

RouteCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  afstand: PropTypes.string,
  hoogte: PropTypes.string,
  gemStijgingsPercentage: PropTypes.string,
  tijd: PropTypes.string,
  maxStijgingsPercentage: PropTypes.string,
  moeilijkheid: PropTypes.string,
};
export default RouteCard;
