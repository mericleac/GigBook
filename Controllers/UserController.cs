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

namespace GigBook.Controllers
{
    [Route("users")]
    [ApiController]
    public class UserController : Controller
    {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;

        private GigBookContext _context;

        public UserController(GigBookContext context, 
        UserManager<User> userManager, 
        SignInManager<User> signInManager)
        {
            _context = context;
            _userManager = userManager;
            _signInManager = signInManager;
        }

        [HttpGet]
        [Route("", Name = "GetAllUsers")]
        public IEnumerable<User> Index()
        {
            return _context.Users.ToList();
        }

    //     [HttpGet("{id}", Name = "GetUser")]
    //     public ActionResult<User> GetUserById(int id)
    //     {
    //         // User user =  _context.Users.SingleOrDefault(p => p.UserId == id);
    //         if (user == null)
    //         {
    //             return NotFound();
    //         }
    //         return user;
    //     }

    //     [HttpGet("loggedIn", Name = "GetLoggedInUser")]
    //     public ActionResult<User> GetLoggedInUser()
    //     {
    //         // User user =  _context.Users
    //             // .Include(x => x.Musician)
    //             // .SingleOrDefault(p => p.UserId == HttpContext.Session.GetInt32("LoggedInUser"));
    //         // user.Musician = _context.Musicians.SingleOrDefault(x => x.MusicianId == user.MusicianId);
    //         if (user == null)
    //         {
    //             return NotFound();
    //         }
    //         return user;
    //     }

        [HttpPost("", Name = "NewUser")]
        public async Task<IActionResult> NewUser(RegisterViewModel model)
        {
            if (ModelState.IsValid)
            {
                var user = new User { UserName = model.Email, Email = model.Email, Name = model.Name };
                var result = await _userManager.CreateAsync(user, model.Password);
                if (result.Succeeded)
                {
                    await _signInManager.SignInAsync(user, isPersistent: false);
                    return Json(user);
                }
                ModelState.AddModelError(string.Empty, "User could not be logged in");
            }
            return NotFound();
        }

        [HttpPost("Login", Name = "LoginUser")]
        [AllowAnonymous]
        public async Task<IActionResult> LoginUser(LoginViewModel model)
        {
            Console.WriteLine("HERE");
            if (ModelState.IsValid) {
                var result = await _signInManager.PasswordSignInAsync(model.Email, model.Password, true, lockoutOnFailure: false);
                if (result.Succeeded)
                {
                    return Json(new { result = "success" });
                }
                return NotFound(new { loginError = new[] {"User could not be logged in."} });
            }
            return NotFound(new { errors = ModelState });
        }
    }
}