import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star } from 'lucide-react';
import { Beach } from '../types/beach';

interface BeachCardProps {
  beach: Beach;
}

const BeachCard = ({ beach }: BeachCardProps) => {
  return (
    <Link to={`/beach/${beach.id}`}>
      <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
        <div className="relative h-48">
          <img
            src={beach.image}
            alt={beach.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{beach.name}</h3>
          <div className="flex items-center text-gray-600 mb-4">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{beach.location}</span>
          </div>
          <div className="flex items-center">
            <Star className="h-5 w-5 text-yellow-400" />
            <span className="ml-1 font-medium">{beach.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BeachCard;