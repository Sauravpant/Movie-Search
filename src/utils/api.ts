import axios from "axios";

const API_URL = import.meta.env.VITE_OMDB_API_URL; // Base API URL from env
const API_KEY = import.meta.env.VITE_OMDB_API_KEY; // API key from env

export const searchMovies = async (query: string): Promise<any> => {
  try {
    // Make GET request to OMDB API with query and API key
    const response = await axios.get(`${API_URL}?apikey=${API_KEY}&s=${query}`);

    // If API returns an error response, throw it
    if (response.data.Response === "False") {
      throw new Error(response.data.Error || "No movies found");
    }

    // Map the raw API data to simplified movie objects
    return response.data.Search.map((movie: any) => ({
      imdbID: movie.imdbID,
      Title: movie.Title,
      Year: movie.Year,
      Poster: movie.Poster === "N/A" ? "/no-poster.png" : movie.Poster, // fallback image
      Type: movie.Type,
    }));
  } catch (error) {
    throw error; // Propagate error to caller
  }
};
