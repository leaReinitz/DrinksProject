using System;
using System.Collections.Generic;
using System.Text;

namespace Entities.Models
{
    public class StreetHelp
    {
        public int Id { get; set; }
        public string StreetName { get; set; }
        public int CityId { get; set; }
        public StreetHelp(int Id, string StreetName, int CityId)
        {
            this.Id = Id;
            this.StreetName = StreetName;
            this.CityId = CityId;
        }
    }
}
