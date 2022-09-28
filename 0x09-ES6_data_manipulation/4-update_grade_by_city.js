export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students) || !Array.isArray(newGrades)) {
    return [];
  }

  const studentsLocation = students.filter((student) => student.location === city);

  const studentsGraded = studentsLocation.map((student) => {
    const studentGrade = newGrades.filter((newGrade) => newGrade.studentId === student.id);
    if (!studentGrade[0]) {
      const grade = 'N/A';
      return { ...student, grade };
    }
    const { grade } = studentGrade[0];
    return { ...student, grade };
  });
  return studentsGraded;
}
