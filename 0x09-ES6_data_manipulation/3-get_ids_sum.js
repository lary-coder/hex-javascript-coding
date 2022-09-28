export default function getStudentIdsSum(students) {
  if (!Array.isArray(students)) {
    return [];
  }

  const reducer = (sum, student) => sum + student.id;

  return students.reduce(reducer, 0);
}
