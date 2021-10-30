using System;
using System.Collections.Generic;
using System.Text;

namespace Entities.Models
{
    public class CityHelp
    {
        public int Id { get; set; }
        public string CityName { get; set; }

        public CityHelp(int Id, string CityName)
        {
            this.Id = Id;
            this.CityName = CityName;
        }
    }
}
