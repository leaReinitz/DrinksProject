using System;
using System.Collections.Generic;

namespace Entities
{
    public partial class City
    {
        public City()
        {
            Street = new HashSet<Street>();
        }

        public int Id { get; set; }
        public string CityName { get; set; }

        public virtual ICollection<Street> Street { get; set; }
    }
}
