﻿using System;
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
    public class CityController : ControllerBase
    {
        ICityBl _cityBL;
        public CityController(ICityBl cityBl)
        {
            _cityBL = cityBl;
        }
        // GET: api/City
        [HttpGet("[action]")]
        public async Task<List<City>> getAllCities()
        {
            return await _cityBL.getAllCitiesAsync();
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
