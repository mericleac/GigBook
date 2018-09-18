using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace GigBook.Models
{
    public class Musician
    {
        [Key]
        public int MusicianId {get;set;}
        [Required]
        [MinLength(2)]
        public string Name {get;set;}
        [MinLength(8)]
        public string Summary {get;set;}
        public string Location {get;set;}
        public DateTime CreatedAt {get;set;}
        public DateTime UpdatedAt {get;set;}

        public List<Review> Reviews {get;set;}
        public List<MusicianInstruments> Instruments {get;set;}
        public List<Gig> Gigs {get;set;}
        public List<PrivateMessage> PMs {get;set;}

        public Musician()
        {
            Reviews = new List<Review>();
            Instruments = new List<MusicianInstruments>();
            Gigs = new List<Gig>();
            PMs = new List<PrivateMessage>();
            CreatedAt = DateTime.Now;
            UpdatedAt = DateTime.Now;
        }
    }
}