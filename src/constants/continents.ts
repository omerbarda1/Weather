export const continents = [
  "Europe",
  "Asia",
  "North America",
  "Australia",
  "Africa",
  "South America",
] as const;

export type Continent = (typeof continents)[number];
