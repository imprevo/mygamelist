import type { Game } from '../models/game';

export function isGameCompleted(game: Game) {
  return game.editions.some((edition) => edition.isCompleted);
}

export function getPlatforms(game: Game): string[] {
  const platforms = new Set(game.editions.map((edition) => edition.platform));
  return Array.from(platforms, (value) => value);
}
