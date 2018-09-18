using Microsoft.AspNetCore.Mvc;
using GigBook.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Web;
using System;
using System.Collections.Generic;

namespace GigBook.Controllers
{
    [Route("musicians")]
    [ApiController]
    public class MusicianController : Controller
    {
        private GigBookContext _context;

        public MusicianController(GigBookContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("", Name = "GetAllMusicians")]
        public IEnumerable<Musician> Index()
        {
            return _context.Musicians.ToList();
        }

        [HttpPost("", Name = "NewMusician")]
        public ActionResult<Musician> NewMusician(Musician musician)
        {
            if (ModelState.IsValid)
            {
                _context.Musicians.Add(musician);
                _context.SaveChanges();
                return musician;
            }
            return NotFound();
        }
    }
}