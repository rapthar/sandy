import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Thermometer, Users, Waves } from 'lucide-react';
import { Region, Statistics } from '../types/directory';

const continentStats: Statistics = {
  totalBeaches: 1243,
  averageRating: 4.5,
  topActivities: ['Swimming', 'Snorkeling', 'Surfing'],
  popularSeasons: ['Summer', 'Spring']
};

const featuredCountries: Region[] = [
  {
    id: 'thailand',
    name: 'Thailand',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a',
    beachCount: 456,
    description: 'Discover pristine beaches and crystal-clear waters in Southeast Asia.',
    climate: 'Tropical',
    popularSeasons: ['November to April']
  },
  {
    id: 'greece',
    name: 'Greece',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077',
    beachCount: 387,
    description: 'Experience Mediterranean charm with stunning coastal landscapes.',
    climate: 'Mediterranean',
    popularSeasons: ['May to September']
  },
  {
    id: 'australia',
    name: 'Australia',
    image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be',
    beachCount: 892,
    description: 'Explore vast coastlines and world-famous surfing spots.',
    climate: 'Temperate to Tropical',
    popularSeasons: ['December to February']
  }
];

const ContinentDirectory = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Asia Pacific Beaches</h1>

      {/* Statistics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <Waves className="h-8 w-8 text-blue-600 mb-2" />
          <h3 className="text-lg font-semibold">Total Beaches</h3>
          <p className="text-3xl font-bold text-blue-600">{continentStats.totalBeaches}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <Users className="h-8 w-8 text-blue-600 mb-2" />
          <h3 className="text-lg font-semibold">Average Rating</h3>
          <p className="text-3xl font-bold text-blue-600">{continentStats.averageRating}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <Thermometer className="h-8 w-8 text-blue-600 mb-2" />
          <h3 className="text-lg font-semibold">Popular Seasons</h3>
          <p className="text-gray-600">{continentStats.popularSeasons.join(', ')}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <MapPin className="h-8 w-8 text-blue-600 mb-2" />
          <h3 className="text-lg font-semibold">Top Activities</h3>
          <p className="text-gray-600">{continentStats.topActivities.join(', ')}</p>
        </div>
      </div>

      {/* Featured Countries */}
      <h2 className="text-2xl font-bold mb-6">Featured Countries</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {featuredCountries.map((country) => (
          <Link key={country.id} to={`/country/${country.id}`}>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <img
                  src={country.image}
                  alt={country.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{country.name}</h3>
                <p className="text-gray-600 mb-4">{country.description}</p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-blue-600">{country.beachCount} beaches</span>
                  <span className="text-gray-500">{country.climate}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Climate Map */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-12">
        <h2 className="text-2xl font-bold mb-6">Climate Zones</h2>
        <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg">
          {/* Map component would go here */}
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500">Interactive climate map coming soon</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContinentDirectory;