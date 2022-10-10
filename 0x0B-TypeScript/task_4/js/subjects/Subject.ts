/// <reference path="./Teacher.ts" />
namespace Subjects {
	export class Subject {
		public teacher: TeacherInterface;

		public setTeacher(teacher: TeacherInterface) {
			this.teacher = teacher;
		}
	}
}
