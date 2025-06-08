const LoadingSpinner = () => (
  <div className="flex justify-center items-center py-12">
    <div className="relative w-12 h-12">
      <div className="absolute inset-0 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
      <div className="absolute inset-1 border-4 border-indigo-300 border-t-transparent rounded-full animate-spin animation-delay-200"></div>
    </div>
  </div>
);

export default LoadingSpinner;