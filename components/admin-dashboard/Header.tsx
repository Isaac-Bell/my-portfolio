const Header = () => {
  return (
    <header className="bg-gray-800 border-b border-gray-700 p-4 flex justify-between items-center">
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="bg-gray-700 text-gray-200 rounded-lg pl-10 pr-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
        <i className="fa-solid fa-search absolute left-3 top-3 text-gray-400"></i>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-gray-300 hover:text-cyan-400">
          <i className="fa-solid fa-bell text-xl"></i>
        </button>
        <img
          src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg"
          alt="Profile"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </header>
  );
};

export default Header;
