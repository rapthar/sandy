import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { MapPin, Star, Umbrella, Waves, Wind, Sun, Coffee, Globe } from 'lucide-react';

const beach = {
  id: 1,
  name: 'Maldives Paradise Beach',
  location: 'Maldives',
  continent: 'asia-pacific',
  continentName: 'Asia Pacific',
  image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8',
  rating: 4.9,
  description: 'Experience pristine white sand beaches and crystal-clear waters in this tropical paradise. Perfect for swimming, snorkeling, and watching spectacular sunsets.',
  amenities: ['Restrooms', 'Parking', 'Food Vendors', 'Lifeguards', 'Beach Rentals'],
  activities: ['Swimming', 'Snorkeling', 'Sunbathing', 'Beach Volleyball'],
  coordinates: {
    lat: 3.2028,
    lng: 73.2207
  }
};

const BeachDetails = () => {
  const { id } = useParams();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
        <Link to={`/continent/${beach.continent}`} className="flex items-center hover:text-blue-600">
          <Globe className="h-4 w-4 mr-1" />
          {beach.continentName}
        </Link>
        <span>→</span>
        <span>{beach.location}</span>
        <span>→</span>
        <span>{beach.name}</span>
      </div>

      {/* Hero Section */}
      <div className="relative h-[400px] rounded-xl overflow-hidden mb-8">
        <img
          src={beach.image}
          alt={beach.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Beach Info */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h1 className="text-3xl font-bold mb-2">{beach.name}</h1>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{beach.location}</span>
                </div>
              </div>
              <Link 
                to={`/continent/${beach.continent}`}
                className="flex items-center text-blue-600 hover:text-blue-800"
              >
                <Globe className="h-5 w-5 mr-1" />
                <span>Explore Region</span>
              </Link>
            </div>
            
            <div className="flex items-center mb-6">
              <Star className="h-6 w-6 text-yellow-400" />
              <span className="ml-2 text-xl font-semibold">{beach.rating}</span>
            </div>
            <p className="text-gray-600 mb-6">{beach.description}</p>
            
            <h2 className="text-xl font-semibold mb-4">Activities</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {beach.activities?.map((activity) => (
                <div key={activity} className="flex items-center bg-blue-50 rounded-lg p-3">
                  <Waves className="h-5 w-5 text-blue-600 mr-2" />
                  <span>{activity}</span>
                </div>
              ))}
            </div>

            <h2 className="text-xl font-semibold mb-4">Amenities</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {beach.amenities?.map((amenity) => (
                <div key={amenity} className="flex items-center">
                  <Umbrella className="h-5 w-5 text-gray-600 mr-2" />
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Weather and Additional Info */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Current Conditions</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Sun className="h-6 w-6 text-yellow-500 mr-2" />
                  <span>Temperature</span>
                </div>
                <span className="font-semibold">28°C</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Wind className="h-6 w-6 text-blue-500 mr-2" />
                  <span>Wind Speed</span>
                </div>
                <span className="font-semibold">12 km/h</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Nearby Services</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Coffee className="h-5 w-5 text-gray-600 mr-2" />
                <span>3 restaurants within 500m</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeachDetails;