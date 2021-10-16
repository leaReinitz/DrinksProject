using Entities.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DL
{
    public interface IStreetDl
    {
        public Task<List<Street>> GetStreetByCityId(int cityId);
    }
}
