import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter } from 'lucide-react';
import BeachCard from '../components/BeachCard';
import { Beach } from '../types/beach';

const mockResults: Beach[] = [
  {
    id: 1,
    name: 'Maldives Paradise Beach',
    location: 'Maldives',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8',
    rating: 4.9,
  },
  {
    id: 2,
    name: 'Bondi Beach',
    location: 'Sydney, Australia',
    image: 'https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb',
    rating: 4.8,
  },
  {
    id: 3,
    name: 'Maya Bay',
    location: 'Phi Phi Islands, Thailand',
    image: 'https://images.unsplash.com/photo-1468413253725-0d5181091126',
    rating: 4.7,
  },
];

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">
          Search Results for "{query}"
        </h1>
        <button className="flex items-center px-4 py-2 bg-white rounded-lg shadow hover:shadow-md">
          <Filter className="h-5 w-5 mr-2" />
          Filters
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockResults.map((beach) => (
          <BeachCard key={beach.id} beach={beach} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;