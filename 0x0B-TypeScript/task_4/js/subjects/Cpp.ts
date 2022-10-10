/// <reference path="./Subject.ts" />
namespace Subjects {
	export interface TeacherInterface {
		experienceTeachingC?: number;
	}

	export class Cpp extends Subject {
		public getRequirements(): string {
			return `Here is the list of requirements for Cpp`;
		}

		public getAvailableTeacher(): string {
			if (!this.teacher.experienceTeachingC) {
				return `No available teacher`;
			}
			return `Available Teacher: ${this.teacher.firstName}`;
		}
	}

}
