export default function hasValuesFromArray(arr, idx) {
  return idx.every(value => arr.has(value));
}
