import { PlatformStatistics, Statistics } from '../models/statistics';
import { getGameList } from './games';

const games = getGameList();

export function getStatistics(): Statistics {
  return {
    total: games.length,
    completed: games.filter((game) => game.status === 'completed').length,
    platforms: getPlatformStatistics(),
  };
}

function getPlatformStatistics(): PlatformStatistics[] {
  const data = new Map<string, number>();
  games.forEach((game) => {
    game.platforms.forEach((platform) => {
      const value = data.get(platform) ?? 0;
      data.set(platform, value + 1);
    });
  });
  return Array.from(data, ([name, total]) => ({ name, total }));
}
