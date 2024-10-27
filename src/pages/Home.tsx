import React from 'react';
import { Search, MapPin, Star, Umbrella } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import FeaturedBeaches from '../components/FeaturedBeaches';

const Home = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            alt="Beautiful beach"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Discover Your Perfect Beach
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            Explore thousands of beaches worldwide. Find the perfect spot for your next beach adventure.
          </p>
          <SearchBar />
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Find Nearby Beaches</h3>
            <p className="text-gray-600">Discover beautiful beaches in your area or plan your next beach vacation.</p>
          </div>
          <div className="text-center p-6">
            <Star className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Read Reviews</h3>
            <p className="text-gray-600">Get insights from real visitors and share your own experiences.</p>
          </div>
          <div className="text-center p-6">
            <Umbrella className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Plan Your Visit</h3>
            <p className="text-gray-600">Check weather conditions, facilities, and plan the perfect beach day.</p>
          </div>
        </div>
      </section>

      {/* Featured Beaches */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Beaches</h2>
          <FeaturedBeaches />
        </div>
      </section>
    </div>
  );
};

export default Home;