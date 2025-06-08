import { useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useMovies } from "./hooks/useMovies";
import type { Movie, MovieFilter } from "./types/types";
import MainLayout from "./components/layout/MainLayout";
import MovieSearch from "./components/movies/MovieSearch";
import MovieGrid from "./components/movies/MovieGrid";
import FavoritesList from "./components/favorites/FavoritesList";
import FilterControls from "./components/ui/FilterControls";
import LoadingSpinner from "./components/common/LoadingSpinner";
import ErrorMessage from "./components/common/ErrorMessage";
import EmptyState from "./components/ui/EmptyState";

const App = () => {
  // Persist favorites using localStorage hook
  const [favorites, setFavorites] = useLocalStorage<Movie[]>(
    "favoriteMovies",
    []
  );
  const { movies, loading, error, search } = useMovies();
  const [activeFilter, setActiveFilter] = useState<MovieFilter>("all");

  // Add/remove favorite movie
  const toggleFavorite = (movie: Movie) => {
    const isFavorite = favorites.some((fav) => fav.imdbID === movie.imdbID);
    if (isFavorite) {
      setFavorites(favorites.filter((fav) => fav.imdbID !== movie.imdbID));
    } else {
      setFavorites([...favorites, movie]);
    }
  };

  // Filter movies by selected filter
  const filteredMovies = () => {
    switch (activeFilter) {
      case "all":
        return movies;
      case "movies":
        return movies.filter((movie) => movie.Type === "movie");
      case "series":
        return movies.filter((movie) => movie.Type === "series");
      case "favorites":
        return movies.filter((movie) =>
          favorites.some((fav) => fav.imdbID === movie.imdbID)
        );
      default:
        return movies;
    }
  };

  return (
    <MainLayout>
      <MovieSearch onSearch={search} loading={loading} />
      {loading && <LoadingSpinner />}
      {error && <ErrorMessage message={error} />}
      {movies.length > 0 && (
        <FilterControls
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />
      )}
      {!loading &&
        !error && ( //Conditional rendering
          <>
            {filteredMovies().length > 0 ? (
              <MovieGrid
                movies={filteredMovies()}
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
              />
            ) : (
              <EmptyState
                title="No movies found"
                description="Try searching for a movie"
                icon="search"
              />
            )}

            <FavoritesList
              favorites={favorites}
              onRemoveFavorite={toggleFavorite}
            />
          </>
        )}
    </MainLayout>
  );
};

export default App;
