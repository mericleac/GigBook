using System;
using System.ComponentModel.DataAnnotations;

namespace GigBook.Models
{
    public class Gig
    {
        [Key]
        public int GigId {get;set;}

        [Required(ErrorMessage="Address is required.")]
        public string Address {get;set;}
        [Required(ErrorMessage="Start time is required.")]
        [FutureDate]
        public DateTime StartTime {get;set;}
        [Required(ErrorMessage="End time is required.")]
        public DateTime EndTime {get;set;}
        [Required(ErrorMessage="Amount is required.")]
        public float Amount {get;set;}
        public bool MusicianConfirm {get;set;}
        public bool UserConfirm {get;set;}

        public bool Transaction {get;set;}
        public DateTime CreatedAt {get;set;}
        public DateTime UpdatedAt {get;set;}

        public string UserId {get;set;}
        public User User {get;set;}

        public string MusicianId {get;set;}
        public User Musician {get;set;}

        public int ReviewId {get;set;}

        public Gig()
        {
            CreatedAt = DateTime.Now;
            UpdatedAt = DateTime.Now;
        }
    }
}