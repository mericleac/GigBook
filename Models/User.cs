using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;

namespace GigBook.Models
{
    public class User
    {
        [Key]
        public int UserId {get;set;}

        [Required(ErrorMessage="Name is required")]
        [MinLength(2, ErrorMessage="Name must be at least 2 characters.")]
        public string Name {get;set;}
        [Required(ErrorMessage="Email is required.")]
        [EmailAddress(ErrorMessage="Must be a valid email.")]
        public string Email {get;set;}
        [Required(ErrorMessage="Password is required.")]
        [MinLength(8, ErrorMessage="Password must be at least 8 characters.")]
        public string Password {get;set;}
        [NotMapped]
        [Required(ErrorMessage="Password Confirm is required")]
        [Compare("Password", ErrorMessage="Passwords do not match.")]
        public string ConfirmPassword {get;set;}
        public DateTime CreatedAt {get;set;}
        public DateTime UpdatedAt {get;set;}

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