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
    public class CityController : ControllerBase
    {
        ICityDL _cityDL;
        public CityController(ICityDL cityDL)
        {
            _cityDL = cityDL;
        }
        // GET: api/City
        //[HttpGet]
        //public async Task<List<City>> Get()
        //{
        //    return await _cityDL.getCities();
        //}
        [HttpGet]
        public List<CityHelp> Get()
        {
            return  _cityDL.getCities();
        }
        // GET: api/City/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/City
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/City/5
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
