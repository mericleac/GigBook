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
    // [Route("musicians")]
    // [ApiController]
    // public class MusicianController : Controller
    // {
    //     private GigBookContext _context;

    //     public MusicianController(GigBookContext context)
    //     {
    //         _context = context;
    //     }

    //     [HttpGet]
    //     [Route("", Name = "GetAllMusicians")]
    //     public IEnumerable<Musician> Index()
    //     {
    //         return _context.Musicians.ToList();
    //     }

    //     [HttpGet]
    //     [Route("{id}", Name = "GetMusicianById")]
    //     public ActionResult<Musician> GetMusicianById(int id)
    //     {
    //         return _context.Musicians.SingleOrDefault(x => x.MusicianId == id);
    //     }

    //     [HttpPost("", Name = "NewMusician")]
    //     public ActionResult<Musician> NewMusician(Musician musician)
    //     {
    //         if (ModelState.IsValid)
    //         {
    //             User currUser = _context.Users.SingleOrDefault(p => p.UserId == HttpContext.Session.GetInt32("LoggedInUser"));
    //             _context.Musicians.Add(musician);
    //             _context.SaveChanges();
    //             currUser.MusicianId = musician.MusicianId;
    //             musician.UserId = currUser.UserId;
    //             _context.SaveChanges();
    //             return musician;
    //         }
    //         return NotFound();
    //     }
    // }
}