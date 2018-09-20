using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;
using System.Linq;
using System.Threading.Tasks;

namespace GigBook.Models
{
    public class User : IdentityUser
    {
        public string Name {get;set;}
        public DateTime CreatedAt {get;set;}
        public DateTime UpdatedAt {get;set;}

        public int MusicianId {get;set;}
        public List<Review> Reviews {get;set;}
        public List<Gig> Gigs {get;set;}
        public List<PrivateMessage> PMs {get;set;}

        public User()
        {
            Reviews = new List<Review>();
            Gigs = new List<Gig>();
            PMs = new List<PrivateMessage>();
            CreatedAt = DateTime.Now;
            UpdatedAt = DateTime.Now;
        }
    }

    [NotMapped]
    public class LoginUser
    {
        [Required(ErrorMessage="Email is required.")]
        public string Email {get;set;}
        [Required(ErrorMessage="Password is required.")]
        public string Password {get;set;}
    }
}