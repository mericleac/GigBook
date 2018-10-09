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

        [HttpGet]
        [Route("{id}", Name = "GetById")]
        public ActionResult<User> GetById(string id)
        {
            return _context.Users
                .Where(x => x.Id == id)
                .Include(x => x.Instruments)
                .SingleOrDefault();
        }

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

        [HttpPut]
        [Route("", Name = "UpdateMusician")]
        public ActionResult<User> UpdateMusician(MusicianViewModel model)
        {
            if (ModelState.IsValid)
            {
                User currUser = _userManager.FindByNameAsync(User.Identity.Name).Result;
                currUser.MusicianName = model.Name;
                currUser.Summary = model.Summary;
                currUser.Location = model.Location;
                currUser.ImageUrl = model.ImageUrl;
                currUser.Instruments = model.Instruments;
                foreach (Instrument inst in model.Instruments) {
                    if (inst.InstrumentId == 0) {
                        _context.Instruments.Add(inst);
                    }
                    else {
                        _context.Instruments.Attach(inst);
                    }
                }
                _context.SaveChanges();
                return currUser;
            }
            return NotFound();
        }

        [HttpPost("filter", Name = "FilterMusicians")]
        public IEnumerable<User> FilterMusicians(FilterViewModel filter) {
            IEnumerable<User> users = _context.Users
                                            .Where(x => x.Role == "Musician")
                                            .Include(x => x.Instruments);
            if (filter.location != null) 
            {
                users = users.Where(x => x.Location.Contains(filter.location));
            };
            if (filter.name != null) 
            {
                users = users.Where(x => x.Name.Contains(filter.name) || x.MusicianName.Contains(filter.name));
            };                    
            List<User> myUsers = users.ToList();
            List<User> usersToRemove = new List<User>();
            foreach (User user in myUsers)
            {
                bool check = false;
                foreach (Instrument inst in user.Instruments)
                {
                    if (inst.YearsExperience < filter.years || (filter.instruments.Length != 0 && !filter.instruments.Contains(inst.Name)))
                    {
                        check = true;
                    }
                }
                if (check)
                {
                    usersToRemove.Add(user);
                }
            }

            foreach (User user in usersToRemove)
            {
                myUsers.Remove(user);
            }

            return myUsers;
        }

        [HttpGet]
        [Route("delete")]
        public ActionResult<User> DeleteMusician()
        {
            User currUser = _userManager.FindByNameAsync(User.Identity.Name).Result;
            currUser.Role = "User";
            _context.SaveChanges();
            return currUser;
        }
    }
}