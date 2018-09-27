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
        public string Role {get;set;}
        public DateTime CreatedAt {get;set;}
        public DateTime UpdatedAt {get;set;}

        // Musician properties
        public string MusicianName {get;set;}
        public string Summary {get;set;}
        public string Location {get;set;}
        public string ImageUrl {get;set;}
        public List<Instrument> Instruments {get;set;}

        // [InverseProperty("Musician")]
        // public List<Review> MyReviews {get;set;}

        // [InverseProperty("User")]
        // public List<Review> MusicianReviews {get;set;}

        // [InverseProperty("User")]
        // public List<Gig> GigsToPlay {get;set;}

        // [InverseProperty("Musician")]
        // public List<Gig> GigRequests {get;set;}

        // [InverseProperty("User")]
        // public List<PrivateMessage> MusicianPMs {get;set;}

        // [InverseProperty("Musician")]
        // public List<PrivateMessage> UserPMs {get;set;}

        public User()
        {
            // MyReviews = new List<Review>();
            // MusicianReviews = new List<Review>();
            // GigsToPlay = new List<Gig>();
            // GigRequests = new List<Gig>();
            // MusicianPMs = new List<PrivateMessage>();
            // UserPMs = new List<PrivateMessage>();
            Instruments = new List<Instrument>();
            CreatedAt = DateTime.Now;
            UpdatedAt = DateTime.Now;
        }
    }
}