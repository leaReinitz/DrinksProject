using Entities.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;



namespace DL
{
    public class CityDl:ICityDl
    {
        stamContext _stamContext;
        public CityDl(stamContext stamContext)
        {
            _stamContext = stamContext;
        }
        public async Task<List<City>> getAllCitiesAsync()
        {
            List<City> a= await _stamContext.City.ToListAsync();
            return a;
        }

    }
}
