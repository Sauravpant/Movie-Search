import type { Movie } from "../../types/types"; // Movie type for props
import { FaRegHeart, FaHeart } from "react-icons/fa"; // Heart icons

interface MovieCardProps {
  movie: Movie;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

const MovieCard = ({ movie, isFavorite, onToggleFavorite }: MovieCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative pb-[150%]">
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="absolute h-full w-full object-cover hover:opacity-90 transition-opacity"
          // If poster fails to load, use a fallback image
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/no-poster.png";
          }}
        />
      </div>
      <div className="p-4 bg-gradient-to-t from-black/80 to-transparent relative">
        <div className="flex justify-between items-start">
          <div className="text-white">
            <h3 className="font-bold text-lg line-clamp-1 drop-shadow-md">
              {movie.Title}
            </h3>
            <p className="text-gray-200 text-sm">{movie.Year}</p>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault(); // Prevents page reload
              onToggleFavorite(); // Toggle favorite status
            }}
            className="text-white hover:text-red-500 focus:outline-none transition-colors"
            aria-label={
              isFavorite ? "Remove from favorites" : "Add to favorites"
            }>
            {isFavorite ? (
              <FaHeart className="h-5 w-5 text-red-500" />
            ) : (
              <FaRegHeart className="h-5 w-5">Add</FaRegHeart>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
