using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BL;
using DL;
using Entities.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace WebApplication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StreetController : ControllerBase
    {

        IStreetBl _streetBl;
        stamContext _stamContext;

        public StreetController(IStreetBl streetBl, stamContext stamContext)
        {
            _streetBl = streetBl;
            _stamContext = stamContext;

        }

        // GET: api/Street
        [HttpGet("[action]")]
        public async Task<List<Street>> GetStreetByCityId(int cityId)
        {
            return await _streetBl.GetStreetByCityId(cityId); 
        }



    }
}
