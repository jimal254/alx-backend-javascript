export default function getStudentIdsSum(arr) {
  return arr.reduce((sum, x) => sum + x.id, 0);
}
