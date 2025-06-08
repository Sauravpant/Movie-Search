import type { Movie } from "../../types/types";
import MovieCard from "./MovieCard";

interface MovieGridProps {
  movies: Movie[];
  favorites: Movie[];
  onToggleFavorite: (movie: Movie) => void;
}

const MovieGrid = ({ movies, favorites, onToggleFavorite }: MovieGridProps) => {
  return (
    // Grid container for movie cards
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          // Check if movie is in favorites to mark it
          isFavorite={favorites.some((fav) => fav.imdbID === movie.imdbID)}
          onToggleFavorite={() => onToggleFavorite(movie)}
        />
      ))}
    </div>
  );
};

export default MovieGrid;
