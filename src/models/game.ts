export interface Game {
  id: string;
  name: string;
  genres: string[];
  cover?: string;
  isFavorite?: boolean;
  editions: GameEdition[];
}

export interface GameEdition {
  name?: string;
  platform: string;
  isCompleted: boolean;
}
