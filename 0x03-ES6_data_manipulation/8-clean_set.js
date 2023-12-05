export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string' || typeof set !== 'set') return '';
  return [...set]
    .filter((el) => el.startsWith(startString))
    .map((el) => el.slice(startString.length))
    .join('-');
}
