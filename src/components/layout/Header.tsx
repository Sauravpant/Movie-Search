//A simple header/Navbar
const Header = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-white text-3xl">🎬</span>
            <h1 className="text-white text-2xl font-bold tracking-tight">
              Movie Explorer
            </h1>
          </div>
        </div>
        <p className="text-white/80 mt-2 text-sm">
          Discover and save your favorite movies
        </p>
      </div>
    </header>
  );
};

export default Header;
