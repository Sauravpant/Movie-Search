import { useState } from "react";
import { searchMovies } from "../utils/api";
import type { Movie } from "../types/types";

export const useMovies = () => {
  // State to store searched movies
  const [movies, setMovies] = useState<Movie[]>([]);
  // State to track loading status
  const [loading, setLoading] = useState(false);
  // State to hold error messages
  const [error, setError] = useState<string | null>(null);

  // Function to search movies by query
  const search = async (query: string) => {
    setLoading(true);
    setError(null);

    try {
      const results = await searchMovies(query);
      setMovies(results);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  // Return state and search function for use in components
  return { movies, loading, error, search };
};
