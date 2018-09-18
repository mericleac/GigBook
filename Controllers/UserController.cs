using Microsoft.AspNetCore.Mvc;
using GigBook.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Web;
using System.Collections.Generic;

namespace GigBook.Controllers
{
    [Route("users")]
    [ApiController]
    public class UserController : Controller
    {
        private GigBookContext _context;

        public UserController(GigBookContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("", Name = "GetAllUsers")]
        public IEnumerable<User> Index()
        {
            return _context.Users.ToList();
        }

        [HttpGet("{id}", Name = "GetUser")]
        public ActionResult<User> GetUserById(int id)
        {
            User user =  _context.Users.SingleOrDefault(p => p.UserId == id);
            if (user == null)
            {
                return NotFound();
            }
            return user;
        }

        [HttpGet("loggedIn", Name = "GetLoggedInUser")]
        public ActionResult<User> GetLoggedInUser()
        {
            User user =  _context.Users.SingleOrDefault(p => p.UserId == HttpContext.Session.GetInt32("LoggedInUser"));
            if (user == null)
            {
                return NotFound();
            }
            return user;
        }

        [HttpPost("", Name = "NewUser")]
        public ActionResult<User> NewUser(User user)
        {
            User emailTaken = _context.Users.SingleOrDefault(p => p.Email == user.Email);
            if (emailTaken != null)
            {
                ViewBag.emailTaken = "This email has already been registered.";
            }
            else {
                if (ModelState.IsValid)
                {
                    PasswordHasher<User> Hasher = new PasswordHasher<User>();
                    user.Password = Hasher.HashPassword(user, user.Password);
                    _context.Add(user);
                    _context.SaveChanges();
                    User currUser = _context.Users.SingleOrDefault(p => p.Email == user.Email);
                    HttpContext.Session.SetInt32("LoggedInUser", currUser.UserId);
                    return currUser;
                }
            }
            return NotFound();
        }

        [HttpPost("Login", Name = "LoginUser")]
        public ActionResult<User> LoginUser(LoginUser login)
        {
            User user = _context.Users.SingleOrDefault(p => p.Email == login.Email);
            if (user != null) {
                var Hasher = new PasswordHasher<User>();
                var result = Hasher.VerifyHashedPassword(user, user.Password, login.Password);
                if (result != 0)
                {
                    HttpContext.Session.SetInt32("LoggedInUser", user.UserId);
                    return user;
                }
            }
            return NotFound();
        }
    }
}