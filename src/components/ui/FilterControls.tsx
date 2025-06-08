import type { MovieFilter } from "../../types/types";
import type { FilterControlsProps } from "../../types/types";

const FilterControls = ({
  activeFilter,
  onFilterChange,
}: FilterControlsProps) => {
  // List of filters to show as buttons
  const filters: MovieFilter[] = ["all", "movies", "series", "favorites"];

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)} // Call when user selects a filter
          className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-colors ${
            activeFilter === filter
              ? "bg-indigo-600 text-white shadow-md" // Highlight active filter
              : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
          }`}>
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterControls;
