import { getDistance } from "geolib";

export const calcDistanceToTelAviv = (to: {
  latitude: number;
  longitude: number;
}) => {
  const from = { latitude: 32.0853, longitude: 34.7818 }; // Tel Aviv coordinates
  return getDistance(from, to);
};
