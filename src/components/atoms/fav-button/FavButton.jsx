import StarSVG from '@/utils/icons/StarSVG';

export default function FavButton({ onClick, isFavorite }) {
  return (
    <button aria-label="mark as interested" onClick={onClick}>
      <StarSVG width={30} height={30} fill={isFavorite ? '#1a614a' : 'none'} />
    </button>
  );
}
