using DL;
using Entities.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class CityBl : ICityBl
    {
        ICityDl _cityDl;

        public CityBl(ICityDl cityDl)
        {
            _cityDl = cityDl;
        }

        public async Task<List<City>> getAllCitiesAsync()
        {

            return await _cityDl.getAllCitiesAsync();
        }

        
        


    }
}
