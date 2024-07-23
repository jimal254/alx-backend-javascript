export default function appendToEachArrayValue(array, appendString) {
  let idx = 0;
  const new_array = [];

  for (const value of array) {
    new_array[idx] = appendString + value;
    idx += 1;
  }

  return array;
}
