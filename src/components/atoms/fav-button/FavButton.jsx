// FavButton.jsx
import React, { useState } from "react";
import styles from "./FavButton.module.scss";
// import StarSVG from "@/utils/icons/StarSVG";
import StarSVG from "../../../utils/icons/StarSVG";

const FavButton = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
    console.log("fav");
  };
  return (
    <button
      className={[styles.iconButton]}
      onClick={() => handleToggleFavorite()}
    >
      <StarSVG width={30} height={30} fill={isFavorite ? "#1a614a" : "none"} />
    </button>
  );
};

export default FavButton;
