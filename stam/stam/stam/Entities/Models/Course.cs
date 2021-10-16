using System;
using System.Collections.Generic;

namespace Entities
{
    public partial class Course
    {
        public Course()
        {
            StudentCourse = new HashSet<StudentCourse>();
        }

        public int CourseId { get; set; }
        public string Description { get; set; }
        public string CourseName { get; set; }

        public virtual ICollection<StudentCourse> StudentCourse { get; set; }
    }
}
