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
    public class CityController : ControllerBase
    {
        ICityBl _cityBL;
        stamContext _stamContext;
        public CityController(ICityBl cityBl, stamContext stamContext)
        {
            _cityBL = cityBl;
            _stamContext = stamContext;
        }
        // GET: api/City
        [HttpGet("[action]")]
        public async Task<List<City>> getAllCities()
        {
            return await _cityBL.getAllCitiesAsync();
        }

        // GET: api/City/5
        [HttpGet]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/City
        [HttpPost]
        public async Task<City> Post([FromBody] City city)
        {

            await _stamContext.City.AddAsync(city);
            await _stamContext.SaveChangesAsync();
            return city;
        }

        // PUT: api/City/5
        [HttpPut()]
        public async Task<City> Put([FromBody] City city)
        {
            City newCity =  await _stamContext.City.Where(c => c.Id == city.Id).FirstAsync();
            newCity = city;
            await _stamContext.SaveChangesAsync();
            return newCity;
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public async Task Delete(int id)
        {
            List<Street> deleteStreetList = await _stamContext.Street.Where(s => s.CityId == id).ToListAsync();
             _stamContext.Street.RemoveRange(deleteStreetList);
            City city = await _stamContext.City.Where(c => c.Id == id).FirstAsync();
            _stamContext.Remove<City>(city);
            await _stamContext.SaveChangesAsync();
        }
    }
}
