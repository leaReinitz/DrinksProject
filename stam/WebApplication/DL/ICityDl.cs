using Entities.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DL
{
    public interface ICityDl
    {
        public Task<List<City>> getAllCitiesAsync();
    }
}
