using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;

namespace GigBook.Models
{
    public class Musician
    {
        [Key]
        public int MusicianId {get;set;}
        [Required(ErrorMessage="Name is required.")]
        [MinLength(2, ErrorMessage="Name must be at least 2 characters.")]
        public string Name {get;set;}
        [MinLength(8, ErrorMessage="Summary must be at least 8 characters.")]
        public string Summary {get;set;}
        public string Location {get;set;}
        public string ImageUrl {get;set;}
        public DateTime CreatedAt {get;set;}
        public DateTime UpdatedAt {get;set;}

        [ForeignKey("User")]
        public int UserId {get;set;}
        public List<Review> Reviews {get;set;}
        public List<Instrument> Instruments {get;set;}
        public List<Gig> Gigs {get;set;}
        public List<PrivateMessage> PMs {get;set;}

        public Musician()
        {
            Reviews = new List<Review>();
            Instruments = new List<Instrument>();
            Gigs = new List<Gig>();
            PMs = new List<PrivateMessage>();
            CreatedAt = DateTime.Now;
            UpdatedAt = DateTime.Now;
        }
    }
}