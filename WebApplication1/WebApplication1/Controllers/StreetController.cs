using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DL;
using Entities.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StreetController : ControllerBase
    {
        IStreetDL _streetDL;
        public StreetController(IStreetDL streetDL)
        {
            _streetDL = streetDL;
        }
        // GET: api/Street
        //[HttpGet("{cityId}")]
        //public async Task<List<Street>> GetStreetByCityId(int cityId)
        //{
        //    return await _streetDL.GetStreetByCityId(cityId);
        //}

        [HttpGet("{cityId}")]
        public List<StreetHelp> GetStreetByCityId(int cityId)
        {
            return _streetDL.GetStreetByCityId(cityId);
        }

        // POST: api/Street
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Street/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
