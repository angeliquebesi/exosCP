export default function getRandomIntInclusive(min: number, max: number, excluded?: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  const random = Math.floor(Math.random() * (max - min + 1)) + min;
  return random === excluded ? random + 1 : random;
}
