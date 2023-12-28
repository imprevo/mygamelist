export interface Game {
  id: string;
  name: string;
  genres: string[];
  isFavorite?: boolean;
  editions: GameEdition[];
  cover?: string;
}

export interface GameEdition {
  name?: string;
  platform: string;
  isCompleted: boolean;
}
