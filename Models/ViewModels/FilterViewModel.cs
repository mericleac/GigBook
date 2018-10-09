
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace GigBook.Models.ViewModels
{
    public class FilterViewModel
    {
        public string location {get;set;}
        public string[] instruments {get;set;}
        public int years {get;set;}
        public string name {get;set;}
    }
}