import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Waves, Menu, X, Search } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Waves className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">BeachFinder</span>
            </Link>
          </div>

          <div className="hidden sm:flex items-center space-x-8">
            <Link to="/search" className="text-gray-600 hover:text-blue-600">Discover</Link>
            <Link to="/popular" className="text-gray-600 hover:text-blue-600">Popular</Link>
            <Link to="/map" className="text-gray-600 hover:text-blue-600">Map</Link>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Sign In
            </button>
          </div>

          <div className="sm:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/search" className="block px-3 py-2 text-gray-600">Discover</Link>
            <Link to="/popular" className="block px-3 py-2 text-gray-600">Popular</Link>
            <Link to="/map" className="block px-3 py-2 text-gray-600">Map</Link>
            <button className="w-full text-left px-3 py-2 text-gray-600">Sign In</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;