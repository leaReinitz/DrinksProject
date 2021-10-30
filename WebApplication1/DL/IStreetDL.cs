using Entities.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DL
{
    public interface IStreetDL
    {
        //public Task<List<Street>> GetStreetByCityId(int cityId);
        public List<StreetHelp> GetStreetByCityId(int cityId);
    }
}
