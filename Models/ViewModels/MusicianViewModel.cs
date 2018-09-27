using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace GigBook.Models.ViewModels
{
    public class MusicianViewModel
    {

        [Required(ErrorMessage="Name is required.")]
        [MinLength(2, ErrorMessage="Name must be at least 2 characters.")]
        public string Name {get;set;}
        [MinLength(8, ErrorMessage="Summary must be at least 8 characters.")]
        public string Summary {get;set;}
        public string Location {get;set;}
        public string ImageUrl {get;set;}
        [PlaysAnInstrument]
        public List<Instrument> Instruments {get;set;}
    }
}