export default function createIteratorObject(report) {
  // Generator function to yield each employee
  function* employeeGenerator() {
    for (const department of Object.values(report)) {
      for (const employee of department) {
        yield employee;
      }
    }
  }

  // Return the generator object
  return employeeGenerator();
}
