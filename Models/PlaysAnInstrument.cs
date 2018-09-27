using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using GigBook.Models;

public class PlaysAnInstrumentAttribute : ValidationAttribute
{
    protected override ValidationResult IsValid(object value, ValidationContext validationContext)
    {
        var list = (List<Instrument>)value;
        if(list.Count < 1) {
            return new ValidationResult("To register as a musician you must play at least one instrument.");
        }
        return ValidationResult.Success;
    }
}