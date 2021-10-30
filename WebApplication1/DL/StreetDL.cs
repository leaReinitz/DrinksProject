using Entities.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DL
{
    public class StreetDL: IStreetDL
    {
        //stamContext _stamContext;
        //public StreetDL(stamContext stamContext)
        //{
        //    _stamContext = stamContext;
        //}
        //public async Task<List<Street>> GetStreetByCityId(int cityId)
        //{
        //    return await _stamContext.Street.Where(s => s.CityId == cityId).ToListAsync();
        //}
        DBContext _dBContext;
        public StreetDL(DBContext dBContext)
        {
            _dBContext = dBContext;
        }

        public List<StreetHelp> GetStreetByCityId(int cityId)
        {
            return _dBContext.GetStreet().Where(s => s.CityId == cityId).ToList();
            
        }
    }
}
