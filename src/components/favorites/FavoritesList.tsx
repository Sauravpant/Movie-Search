import type { Movie } from "../../types/types";
import MovieCard from "../movies/MovieCard";
import EmptyState from "../ui/EmptyState";
import type { FavoritesListProps } from "../../types/types";

// Component to show the list of favorite movies
const FavoritesList = ({ favorites, onRemoveFavorite }: FavoritesListProps) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">
        Your Favorites ({favorites.length})
      </h2>
      {favorites.length === 0 ? (
        // Show empty state if no favorites
        <EmptyState
          title="No favorites yet"
          description="Add some movies to your favorites list"
          icon="heart"
        />
      ) : (
        // Render MovieCard for each favorite movie
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {favorites.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              isFavorite={true}
              onToggleFavorite={() => onRemoveFavorite(movie)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesList;
