using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace GigBook.Models.ViewModels
{
    public class RegisterViewModel
    {
        [Required(ErrorMessage="Name is required")]
        [MinLength(2, ErrorMessage="Name must be at least 2 characters.")]
        public string Name {get;set;}
        [Required(ErrorMessage="Email is required.")]
        [EmailAddress(ErrorMessage="Must be a valid email.")]
        public string Email {get;set;}
        [Required(ErrorMessage="Password is required.")]
        [MinLength(8, ErrorMessage="Password must be at least 8 characters.")]
        public string Password {get;set;}
        [Required(ErrorMessage="Password Confirm is required")]
        [Compare("Password", ErrorMessage="Passwords do not match.")]
        public string ConfirmPassword {get;set;}
    }
}