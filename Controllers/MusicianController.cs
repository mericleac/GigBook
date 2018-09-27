using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using GigBook.Models;
using GigBook.Models.ViewModels;
using Microsoft.EntityFrameworkCore;

namespace GigBook.Controllers
{

    [Route("musicians")]
    [ApiController]
    public class MusicianController : Controller
    {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        private GigBookContext _context;

        public MusicianController(GigBookContext context,
        UserManager<User> userManager,
        SignInManager<User> signInManager)
        {
            _context = context;
            _userManager = userManager;
            _signInManager = signInManager;
        }

        [HttpGet]
        [Route("", Name = "GetAllMusicians")]
        public IEnumerable<User> Index()
        {
            return _context.Users
                .Where(x => x.Role == "Musician")
                .Include(x => x.Instruments)
                .ToList();
        }

    //     [HttpGet]
    //     [Route("{id}", Name = "GetMusicianById")]
    //     public ActionResult<Musician> GetMusicianById(int id)
    //     {
    //         return _context.Musicians.SingleOrDefault(x => x.MusicianId == id);
    //     }

        [HttpPost("", Name = "NewMusician")]
        public async Task<ActionResult<User>> NewMusician(MusicianViewModel model)
        {
            if (ModelState.IsValid)
            {
                User currUser = _userManager.FindByNameAsync(User.Identity.Name).Result;
                currUser.MusicianName = model.Name;
                currUser.Summary = model.Summary;
                currUser.Location = model.Location;
                currUser.ImageUrl = model.ImageUrl;
                currUser.Instruments = model.Instruments;
                currUser.Role = "Musician";
                foreach (Instrument inst in model.Instruments) {
                    _context.Instruments.Add(inst);
                }
                _context.SaveChanges();
                return currUser;
            }
            return NotFound();
        }
    }
}