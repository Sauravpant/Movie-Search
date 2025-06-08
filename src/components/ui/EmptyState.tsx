import { FaFilm, FaHeart, FaSearch } from "react-icons/fa";

interface EmptyStateProps {
  title: string;
  description: string;
  icon?: "search" | "heart" | "film";
}

const EmptyState = ({ title, description, icon = "film" }: EmptyStateProps) => {
  // Select icon based on the icon prop
  const IconComponent = {
    search: FaSearch,
    heart: FaHeart,
    film: FaFilm,
  }[icon];

  return (
    <div className="text-center py-12 bg-white rounded-lg shadow-sm p-8 max-w-md mx-auto">
      <div className="mx-auto h-16 w-16 text-indigo-500 mb-4">
        <IconComponent className="h-full w-full" />
      </div>
      <h3 className="mt-2 text-xl font-bold text-gray-800">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
};

export default EmptyState;
