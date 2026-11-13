// Map projections shared by the map builder (scripts/build-maps.mjs) and the era maps.
// South Asia: equirectangular, corrected for latitude. World: plain equirectangular.

export const SA = {
  lon0: 60, lat1: 38, scale: 17, cosLat: Math.cos((21 * Math.PI) / 180),
  w: 610, h: 570,
};
export const projectSA = (lon: number, lat: number): [number, number] => [
  (lon - SA.lon0) * SA.cosLat * SA.scale,
  (SA.lat1 - lat) * SA.scale,
];

export const WORLD = { lon0: -180, lat1: 80, scale: 2.7, w: 972, h: 373 };
export const projectWorld = (lon: number, lat: number): [number, number] => [
  (lon - WORLD.lon0) * WORLD.scale,
  (WORLD.lat1 - lat) * WORLD.scale,
];
