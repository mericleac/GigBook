using System;
using System.ComponentModel.DataAnnotations;

namespace GigBook.Models
{
    public class PrivateMessage
    {
        [Key]
        public int MessageId {get;set;}
        [Required(ErrorMessage= "Message is required.")]
        public string Message {get;set;}
        public string From {get;set;}
        public DateTime CreatedAt {get;set;}
        public DateTime UpdatedAt {get;set;}

        public int UserId {get;set;}
        public User User {get;set;}

        public int MusicianId {get;set;}
        public Musician Musician {get;set;}

        public PrivateMessage()
        {
            CreatedAt = DateTime.Now;
            UpdatedAt = DateTime.Now;
        }
    }
}