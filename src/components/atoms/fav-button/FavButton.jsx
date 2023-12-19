'use client';
import React, { useState } from 'react';
import StarSVG from '@/utils/icons/StarSVG';

export default function FavButton() {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <button aria-label="favorite" onClick={() => handleToggleFavorite()}>
      <StarSVG width={30} height={30} fill={isFavorite ? '#1a614a' : 'none'} />
    </button>
  );
}
