using System;
using System.Collections.Generic;

namespace Entities.Models
{
    public partial class Street
    {
        public int Id { get; set; }
        public string StreetName { get; set; }
        public int CityId { get; set; }

        public virtual City City { get; set; }
    }
}
