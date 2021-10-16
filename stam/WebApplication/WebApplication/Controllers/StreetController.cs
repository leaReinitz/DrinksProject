using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BL;
using Entities.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApplication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StreetController : ControllerBase
    {

        IStreetBl _streetBl;
        public StreetController(IStreetBl streetBl)
        {
            _streetBl = streetBl;
        }

        // GET: api/Street
        [HttpGet("[action]")]
        public async Task<List<Street>> GetStreetByCityId(int cityId)
        {
            return await _streetBl.GetStreetByCityId(cityId); 
        }


       
      
    }
}
