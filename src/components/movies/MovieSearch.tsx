import { useState } from "react";
import Button from "../common/Button";
import type { MovieSearchProps } from "../../types/types";

const MovieSearch = ({ onSearch, loading }: MovieSearchProps) => {
  const [query, setQuery] = useState(""); // State to store user input

  // Handle form submission to trigger search
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload on submit
    if (query.trim()) {
      onSearch(query); // Call search function with query
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)} // Update query on input change
          placeholder="Search for movies..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          disabled={loading} // Disable input while loading
        />
        <Button
          type="submit"
          variant="primary"
          disabled={loading || !query.trim()} // Disable button if loading or query is empty
        >
          {loading ? "Searching..." : "Search"}
        </Button>
      </div>
    </form>
  );
};

export default MovieSearch;
