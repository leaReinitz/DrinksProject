﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DL;
using Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace stam.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DefaultController : ControllerBase
    {

        stamContext _stamContext;
        public DefaultController(stamContext stamContext)
        {
            _stamContext = stamContext;
        }
        // GET: api/Default
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        [HttpGet("[action]")]
        public async Task<List<Course>> getAllCities(int z)
        {
            var s= await _stamContext.StudentCourse.Include(x => x.Course).Where(entry => entry.StudentId == z).Select(entry => entry.Course).ToListAsync();
            return s;
        }

        // POST: api/Default
        [HttpPost]
        public async Task<City> Post([FromBody] City city)
        {
            await _stamContext.City.AddAsync(city);
            await _stamContext.SaveChangesAsync();
            City city1 = await _stamContext.City.LastAsync();
            return city1;
        }
       
        // PUT: api/Default/5
        [HttpPut("{id}")]
        public async Task<City> Put( [FromBody] City city)
        {
            City city1 = await _stamContext.City.Where(e => e.CityName == city.CityName).FirstAsync();
            city1 = city;
            await _stamContext.SaveChangesAsync();
            return city1;
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public async Task Delete(int id)
        {
            City city = await _stamContext.City.Where(e => e.Id == id).FirstAsync();
            _stamContext.Remove<City>(city);
            await _stamContext.SaveChangesAsync();
        }
    }
}
