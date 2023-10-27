import { Game } from '../models/game';

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
    platforms: ['PC'],
    status: 'played',
    isFavorite: true,
  },
  {
    id: 'nier-automata',
    name: 'NieR: Automata',
    genres: ["Role-playing (RPG)', 'Hack and slash/Beat 'em up"],
    platforms: ['PC'],
    status: 'completed',
  },
  {
    id: 'vampire-survivors',
    name: 'Vampire Survivors',
    genres: ['Role-playing (RPG)', 'Indie', 'Arcade'],
    platforms: ['iOS'],
    status: 'completed',
  },
  {
    id: 'monument-Valley',
    name: 'Monument Valley+',
    genres: ['Puzzle', 'Adventure', 'Indie'],
    platforms: ['iOS'],
    status: 'completed',
    isFavorite: false,
  },
  {
    id: 'monument-valley-2',
    name: 'Monument Valley 2+',
    genres: ['Puzzle', 'Adventure', 'Indie'],
    platforms: ['iOS'],
    status: 'completed',
  },
  {
    id: 'mortal-kombat-komplete-edition',
    name: 'Mortal Kombat: Komplete Edition',
    genres: ['Fighting'],
    platforms: ['PC', 'PlayStation Vita'],
    status: 'played',
  },
  {
    id: 'mortal-kombat-xl',
    name: 'Mortal Kombat XL',
    genres: ['Fighting'],
    platforms: ['PlayStation 4'],
    status: 'played',
  },
  {
    id: 'mortal-kombat-11',
    name: 'Mortal Kombat 11',
    genres: ['Fighting'],
    platforms: ['PlayStation 4'],
    status: 'completed',
    isFavorite: true,
  },
  {
    id: 'devil-may-cry-3',
    name: "Devil May Cry 3: Dante's Awakening - Special Edition",
    genres: ["Shooter', 'Hack and slash/Beat 'em up', 'Adventure"],
    platforms: ['PC'],
    status: 'completed',
  },
  {
    id: 'devil-may-cry-4',
    name: 'Devil May Cry 4',
    genres: ["Hack and slash/Beat 'em up', 'Adventure"],
    platforms: ['PC', 'PlayStation 4'],
    status: 'completed',
    isFavorite: true,
  },
  {
    id: 'devil-may-cry-5',
    name: 'Devil May Cry 5',
    genres: ["Hack and slash/Beat 'em up', 'Adventure"],
    platforms: ['PlayStation 4'],
    status: 'completed',
  },
  {
    id: 'dmc-devil-may-cry',
    name: 'DmC: Devil May Cry',
    genres: ["Hack and slash/Beat 'em up', 'Adventure"],
    platforms: ['PC'],
    status: 'completed',
  },
  {
    id: 'need-for-speed-underground',
    name: 'Need for Speed: Underground',
    genres: ['Racing', 'Simulator'],
    platforms: ['PC'],
    status: 'completed',
    isFavorite: true,
  },
  {
    id: 'need-for-speed-underground-2',
    name: 'Need for Speed: Underground 2',
    genres: ['Racing', 'Simulator'],
    platforms: ['PC'],
    status: 'completed',
    isFavorite: true,
  },
  {
    id: 'need-for-speed-underground-rivals',
    name: 'Need For Speed: Underground - Rivals',
    genres: ['Racing', 'Simulator'],
    platforms: ['PlayStation Portable'],
    status: 'played',
  },
  {
    id: 'metal-gear-rising-revengeance',
    name: 'Metal Gear Rising: Revengeance',
    genres: ["Shooter', 'Strategy', 'Hack and slash/Beat 'em up', 'Adventure"],
    platforms: ['PC'],
    status: 'completed',
    isFavorite: true,
  },
  {
    id: 'metal-gear-solid',
    name: 'Metal Gear Solid',
    genres: ['Shooter'],
    platforms: ['PlayStation One'],
    status: 'completed',
  },
  {
    id: 'hotline-miami',
    name: 'Hotline Miami',
    genres: ['Shooter', 'Indie', 'Arcade'],
    platforms: ['PlayStation Portable'],
    status: 'played',
  },
];

export function getGameList(onlyFavorite = false): Game[] {
  let games = data;
  if (onlyFavorite) {
    games = games.filter((game) => game.isFavorite);
  }
  return games;
}
