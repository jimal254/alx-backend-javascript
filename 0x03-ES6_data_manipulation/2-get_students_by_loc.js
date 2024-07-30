export default function getStudentsByLocation(arr, value) {
  return arr.filter((x) => value === x.location);
}
