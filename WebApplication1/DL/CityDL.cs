using Entities.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DL
{
    public class CityDL: ICityDL
    {
        //stamContext _stamContext;
        //public CityDL(stamContext stamContext)
        //{
        //    _stamContext = stamContext;
        //}
        //public async Task<List<City>> getCities()
        //{
        //    return await _stamContext.City.ToListAsync();
        //}
        DBContext _dBContext;
            public CityDL(DBContext dBContext)
        {
            _dBContext = dBContext;
        }
        public List<CityHelp> getCities()
        {
            return _dBContext.GetCity();
        }


    }
}
