using DL;
using Entities.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class StreetBl:IStreetBl
    {
        IStreetDl _streetDl;
        public StreetBl(IStreetDl streetDl)
        {
            _streetDl = streetDl;
        }
        public async Task<List<Street>> GetStreetByCityId(int cityId)
        {
            return await _streetDl.GetStreetByCityId(cityId);
        }

    }
}
