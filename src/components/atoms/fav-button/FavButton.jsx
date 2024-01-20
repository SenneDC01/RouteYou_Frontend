'use client';
import { markAsInterested } from '@/services/EventService';
import StarSVG from '@/utils/icons/StarSVG';
import { useState } from 'react';

export default function FavButton({ event }) {
  const [isFavorite, setIsFavorite] = useState(event.relation === 'INTERESTED');

  const makeInterested = async () => {
    const response = await markAsInterested(event.id);
    if (response.code === 200) {
      setIsFavorite(true);
    }
  };
  return (
    <button aria-label="mark as interested" onClick={makeInterested}>
      <StarSVG width={30} height={30} fill={isFavorite ? '#1a614a' : 'none'} />
    </button>
  );
}
