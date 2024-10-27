import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star } from 'lucide-react';

const beaches = [
  {
    id: 1,
    name: 'Maldives Paradise Beach',
    location: 'Maldives',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8',
    rating: 4.9,
    continent: 'asia-pacific'
  },
  {
    id: 2,
    name: 'Bondi Beach',
    location: 'Sydney, Australia',
    image: 'https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb',
    rating: 4.8,
    continent: 'asia-pacific'
  },
  {
    id: 3,
    name: 'Maya Bay',
    location: 'Phi Phi Islands, Thailand',
    image: 'https://images.unsplash.com/photo-1468413253725-0d5181091126',
    rating: 4.7,
    continent: 'asia-pacific'
  }
];

const FeaturedBeaches = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {beaches.map((beach) => (
        <div key={beach.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
          <Link to={`/beach/${beach.id}`}>
            <div className="relative h-48">
              <img
                src={beach.image}
                alt={beach.name}
                className="w-full h-full object-cover"
              />
            </div>
          </Link>
          <div className="p-6">
            <Link to={`/beach/${beach.id}`}>
              <h3 className="text-xl font-semibold mb-2 hover:text-blue-600">{beach.name}</h3>
            </Link>
            <div className="flex items-center justify-between text-gray-600 mb-4">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{beach.location}</span>
              </div>
              <Link 
                to={`/continent/${beach.continent}`}
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                View Region
              </Link>
            </div>
            <div className="flex items-center">
              <Star className="h-5 w-5 text-yellow-400" />
              <span className="ml-1 font-medium">{beach.rating}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedBeaches;