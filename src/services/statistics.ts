import type { PlatformStatistics, Statistics } from '../models/statistics';
import { isGameCompleted } from '../utils/game';
import { getGameList } from './games';

const games = getGameList();

export function getStatistics(): Statistics {
  return {
    total: games.length,
    completed: getCompletedGames(),
    platforms: getPlatformStatistics(),
  };
}

function getCompletedGames(): number {
  const completed = games.filter((game) => isGameCompleted(game));
  return completed.length;
}

function getPlatformStatistics(): PlatformStatistics[] {
  const data = new Map<string, number>();
  games.forEach((game) => {
    game.editions.forEach((edition) => {
      const value = data.get(edition.platform) ?? 0;
      data.set(edition.platform, value + 1);
    });
  });
  return Array.from(data, ([name, total]) => ({ name, total }));
}
