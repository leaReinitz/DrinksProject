using System;
using System.Collections.Generic;

namespace Entities
{
    public partial class Student
    {
        public Student()
        {
            StudentCourse = new HashSet<StudentCourse>();
        }

        public int StudentId { get; set; }
        public string Name { get; set; }

        public virtual ICollection<StudentCourse> StudentCourse { get; set; }
    }
}
