export interface Region {
  id: string;
  name: string;
  image: string;
  beachCount: number;
  description: string;
  climate?: string;
  popularSeasons?: string[];
}

export interface Statistics {
  totalBeaches: number;
  averageRating: number;
  topActivities: string[];
  popularSeasons: string[];
}