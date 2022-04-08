﻿using Microsoft.AspNetCore.Http;
using System.ComponentModel.DataAnnotations;

namespace OnClass.Validations
{
    public class AllowedExtensionsAttribute : ValidationAttribute
    {
        private readonly string[] _extensions;

        public AllowedExtensionsAttribute(string[] extensions)
        {
            _extensions = extensions;
        }

        protected override ValidationResult IsValid(
        object value, ValidationContext validationContext)
        {
            if (value is not null && value is IFormFile)
            {
                var file = value as IFormFile;
                var extension = Path.GetExtension(file.FileName);
                if (!_extensions.Contains(extension.ToLower()))
                {
                    return new ValidationResult(GetErrorMessage());
                }
            }

            return ValidationResult.Success;
        }

        public static string GetErrorMessage()
        {
            return $"Somente arquivos PDF são permitidos!";
        }
    }
}
