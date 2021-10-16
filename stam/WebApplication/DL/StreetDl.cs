using Entities.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace DL
{
    public class StreetDl:IStreetDl
    {
        stamContext _stamContext;
        public StreetDl(stamContext stamContext)
        {
            _stamContext = stamContext;
        }

        public async Task<List<Street>> GetStreetByCityId(int cityId)
        {
            return await _stamContext.Street.Where(s => s.CityId == cityId).ToListAsync();
        }

    }
}
