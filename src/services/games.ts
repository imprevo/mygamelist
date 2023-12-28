import type { Game } from '../models/game';

const data: Game[] = [
  {
    id: 'terraria',
    name: 'Terraria',
    genres: [
      'Platform',
      'Role-playing (RPG)',
      'Strategy',
      'Adventure',
      'Indie',
    ],
    isFavorite: true,
    editions: [{ platform: 'PC', isCompleted: false }],
  },
  {
    id: 'nier-automata',
    name: 'NieR: Automata',
    genres: ['Role-playing (RPG)', "Hack and slash/Beat 'em up"],
    editions: [{ platform: 'PC', isCompleted: true }],
  },
  {
    id: 'vampire-survivors',
    name: 'Vampire Survivors',
    genres: ['Role-playing (RPG)', 'Indie', 'Arcade'],
    editions: [{ platform: 'iOS', isCompleted: true }],
  },
  {
    id: 'monument-Valley',
    name: 'Monument Valley+',
    genres: ['Puzzle', 'Adventure', 'Indie'],
    editions: [{ platform: 'iOS', isCompleted: true }],
  },
  {
    id: 'monument-valley-2',
    name: 'Monument Valley 2+',
    genres: ['Puzzle', 'Adventure', 'Indie'],
    editions: [{ platform: 'iOS', isCompleted: true }],
  },
  {
    id: 'mortal-kombat-komplete-edition',
    name: 'Mortal Kombat: Komplete Edition',
    genres: ['Fighting'],
    editions: [
      { platform: 'PC', isCompleted: false },
      { platform: 'PlayStation Vita', isCompleted: true },
    ],
  },
  {
    id: 'mortal-kombat-xl',
    name: 'Mortal Kombat XL',
    genres: ['Fighting'],
    editions: [{ platform: 'PlayStation 4', isCompleted: false }],
  },
  {
    id: 'mortal-kombat-11',
    name: 'Mortal Kombat 11',
    genres: ['Fighting'],
    isFavorite: true,
    editions: [
      { platform: 'PlayStation 4', isCompleted: true },
      { platform: 'PC', isCompleted: false },
    ],
  },
  {
    id: 'devil-may-cry-3',
    name: "Devil May Cry 3: Dante's Awakening",
    genres: ['Shooter', "Hack and slash/Beat 'em up", 'Adventure'],
    editions: [{ name: 'Special Edition', platform: 'PC', isCompleted: true }],
  },
  {
    id: 'devil-may-cry-4',
    name: 'Devil May Cry 4',
    genres: ["Hack and slash/Beat 'em up", 'Adventure'],
    isFavorite: true,
    editions: [
      { platform: 'PC', isCompleted: true },
      { name: 'Special Edition', platform: 'PC', isCompleted: true },
      {
        name: 'Special Edition',
        platform: 'PlayStation 4',
        isCompleted: true,
      },
    ],
    cover: 'https://images.igdb.com/igdb/image/upload/t_cover_med/co1u6n.jpg',
  },
  {
    id: 'devil-may-cry-5',
    name: 'Devil May Cry 5',
    genres: ["Hack and slash/Beat 'em up", 'Adventure'],
    editions: [{ platform: 'PlayStation 4', isCompleted: true }],
  },
  {
    id: 'dmc-devil-may-cry',
    name: 'DmC: Devil May Cry',
    genres: ["Hack and slash/Beat 'em up", 'Adventure'],
    editions: [{ platform: 'PC', isCompleted: true }],
  },
  {
    id: 'need-for-speed-underground',
    name: 'Need for Speed: Underground',
    genres: ['Racing', 'Simulator'],
    isFavorite: true,
    editions: [{ platform: 'PC', isCompleted: true }],
  },
  {
    id: 'need-for-speed-underground-2',
    name: 'Need for Speed: Underground 2',
    genres: ['Racing', 'Simulator'],
    isFavorite: true,
    editions: [{ platform: 'PC', isCompleted: true }],
  },
  {
    id: 'need-for-speed-underground-rivals',
    name: 'Need For Speed: Underground - Rivals',
    genres: ['Racing', 'Simulator'],
    editions: [{ platform: 'PlayStation Portable', isCompleted: false }],
  },
  {
    id: 'metal-gear-rising-revengeance',
    name: 'Metal Gear Rising: Revengeance',
    genres: ['Shooter', 'Strategy', "Hack and slash/Beat 'em up", 'Adventure'],
    isFavorite: true,
    editions: [{ platform: 'PC', isCompleted: true }],
  },
  {
    id: 'metal-gear-solid',
    name: 'Metal Gear Solid',
    genres: ['Shooter'],
    editions: [{ platform: 'PlayStation One', isCompleted: true }],
  },
  {
    id: 'hotline-miami',
    name: 'Hotline Miami',
    genres: ['Shooter', 'Indie', 'Arcade'],
    editions: [{ platform: 'PlayStation Portable', isCompleted: false }],
  },
];

export function getGameList(onlyFavorite = false): Game[] {
  let games = data;
  if (onlyFavorite) {
    games = games.filter((game) => game.isFavorite);
  }
  return games;
}
