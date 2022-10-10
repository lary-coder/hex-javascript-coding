
namespace Subjects {
	export interface TeacherInterface {
		experienceTeachingReact?: number;
	}

	export class React extends Subject {
		public getRequirements(): string {
			return `Here is the list of requirements for React`;
		}

		public getAvailableTeacher(): string {
			if (!this.teacher.experienceTeachingReact) {
				return `No available teacher`;
			}
			return `Available Teacher: ${this.teacher.firstName}`;
		}
	}

}