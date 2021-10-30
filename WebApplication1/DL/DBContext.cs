using Entities.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DL
{
    public class DBContext
    {
        public static List<CityHelp> City = new List<CityHelp> { new CityHelp(1, "Bene-Brack"), new CityHelp(2, "Jerusalem"), };
        public static List<StreetHelp> Street = new List<StreetHelp> { new StreetHelp(1, "Mirski",2), new StreetHelp(2, "Rabi-Ukiva",1), new StreetHelp(2, "Valenshtein",2) };
        public List<CityHelp> GetCity()
        {
            return City;
        }
        public List<StreetHelp> GetStreet()
        {
            return Street;
        }
    }
}
