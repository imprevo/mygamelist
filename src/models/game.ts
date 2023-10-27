export interface Game {
  id: string;
  name: string;
  platforms: string[];
  genres: string[];
  status: 'played' | 'completed';
  isFavorite?: boolean;
}
