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
    [Route("gigs")]
    [ApiController]
    public class GigController : Controller
    {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        private GigBookContext _context;

        public GigController(GigBookContext context,
        UserManager<User> userManager,
        SignInManager<User> signInManager)
        {
            _context = context;
            _userManager = userManager;
            _signInManager = signInManager;
        }

        [HttpGet]
        [Route("")]
        public IEnumerable<Gig> Index()
        {
            User currUser = _userManager.FindByNameAsync(User.Identity.Name).Result;
            List<Gig> gigs = _context.Gigs
                .Where(x => x.UserId == currUser.Id || x.MusicianId == currUser.Id)
                .Include(x => x.User)
                .Include(x => x.Musician)
                .ToList();
            return gigs;
        }

        [HttpGet]
        [Route("{id}")]
        public ActionResult<Gig> GigById(int id)
        {
            return _context.Gigs
                .Where(x => x.GigId == id)
                .Include(x => x.User)
                .Include(x => x.Musician)
                .SingleOrDefault();
        }

        [HttpPost]
        [Route("update")]
        public ActionResult<Gig> UpdateGig(Gig model)
        {
            User currUser = _userManager.FindByNameAsync(User.Identity.Name).Result;
            Gig gig = _context.Gigs.Where(x => x.GigId == model.GigId).SingleOrDefault();
            if (model.Amount != gig.Amount) {
                gig.Amount = model.Amount;
                gig.Address = model.Address;
                gig.StartTime = model.StartTime;
                gig.EndTime = model.EndTime;
                gig.MusicianConfirm = false;
                gig.UserConfirm = false;
                if (gig.MusicianId == currUser.Id) {
                    gig.MusicianConfirm = true;
                }
                else {
                    gig.UserConfirm = true;
                }
            }
            else {
                gig.UserConfirm = true;
                gig.MusicianConfirm = true;
            } 
            _context.SaveChanges();
            return gig;
        }

        [HttpPost]
        [Route("{id}")]
        public ActionResult<Gig> NewGig(string id, Gig gig)
        {
            User currUser = _userManager.FindByNameAsync(User.Identity.Name).Result;
            User musician = _context.Users.Where(x => x.Id == id).SingleOrDefault();
            gig.User = currUser;
            gig.UserId = currUser.Id;
            gig.Musician = musician;
            gig.MusicianId = musician.Id;
            gig.UserConfirm = true;
            _context.Add(gig);
            _context.SaveChanges();
            System.Console.WriteLine(gig);
            return gig;
        }

        [HttpGet]
        [Route("payment/{id}")]
        public ActionResult<Gig> ApprovePayment(int id)
        {
            Gig gig = _context.Gigs.Where(x => x.GigId == id).SingleOrDefault();
            gig.Transaction = true;
            _context.SaveChanges();
            return gig;
        }

    }
}