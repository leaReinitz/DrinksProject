export class CourseClass {
    CourseName: string;
    Description:string;
    CourseId: number;
    constructor(CourseName: string, Description:string,CourseId: number) {
        this.CourseName = CourseName;
        this.Description = Description;
        this.CourseId = CourseId;
    }
}