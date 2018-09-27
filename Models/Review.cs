// using System;
// using System.ComponentModel.DataAnnotations;

// namespace GigBook.Models
// {
//     public class Review
//     {
//         [Key]
//         public int ReviewId {get;set;}

//         [Required]
//         public int Rating {get;set;}
//         [MinLength(4)]
//         public string Comment {get;set;}
//         public DateTime CreatedAt {get;set;}
//         public DateTime UpdatedAt {get;set;}

//         public int MusicianId {get;set;}
//         public User Musician {get;set;}

//         public int UserId {get;set;}
//         public User User {get;set;}

//         public int GigId {get;set;}
//         public Gig Gig {get;set;}

//         public Review()
//         {
//             CreatedAt = DateTime.Now;
//             UpdatedAt = DateTime.Now;
//         }
//     }
// }