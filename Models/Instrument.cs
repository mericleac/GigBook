using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace GigBook.Models
{
    public class Instrument
    {
        [Key]
        public int InstrumentId {get;set;}
        [Required]
        [MinLength(2)]
        public string Name {get;set;}
        [Required]
        [MinLength(2)]
        public string Family {get;set;}
        [Range(0, 99)]
        public int YearsExperience {get;set;}

        public int MusicianId {get;set;}
        public Musician Musician {get;set;}
    }
}