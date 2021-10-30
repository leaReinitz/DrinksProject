using Entities.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DL
{
    public interface ICityDL
    {
        //public Task<List<City>> getCities();
        public List<CityHelp> getCities();
    }
}
