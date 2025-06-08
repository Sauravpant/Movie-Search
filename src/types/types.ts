//Type defination for various components for type safety 

export interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  Type?: string;
}

export type MovieListType = Movie[];

export type MovieFilter = "all" | "favorites" | "movies" | "series";

export interface FavoritesListProps {
  favorites: Movie[];
  onRemoveFavorite: (movie: Movie) => void;
}

export interface MovieSearchProps {
  onSearch: (query: string) => void;
  loading: boolean;
}

export interface FilterControlsProps {
  activeFilter: MovieFilter;
  onFilterChange: (filter: MovieFilter) => void;
}
