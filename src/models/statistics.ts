export interface PlatformStatistics {
  name: string;
  total: number;
}

export interface Statistics {
  total: number;
  completed: number;
  platforms: PlatformStatistics[];
}
