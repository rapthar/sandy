export interface Beach {
  id: number;
  name: string;
  location: string;
  image: string;
  rating: number;
  continent?: string;
  continentName?: string;
  description?: string;
  amenities?: string[];
  activities?: string[];
  coordinates?: {
    lat: number;
    lng: number;
  };
}