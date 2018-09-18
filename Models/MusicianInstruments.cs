using System;
using System.ComponentModel.DataAnnotations;

namespace GigBook.Models
{
    public class MusicianInstruments
    {
        [Key]
        public int MusicianInstrumentId {get;set;}

        public int MusicianId {get;set;}
        public Musician Musician {get;set;}

        public int InstrumentId {get;set;}
        public Instrument Instrument {get;set;}
    }
}