using OnClass.Extensions;
using System.ComponentModel.DataAnnotations;

namespace OnClass.Validations
{
    public class AgeCheckAttribute : ValidationAttribute
    {
        protected override ValidationResult IsValid(
        object value, ValidationContext validationContext)
        {
            var date = (DateTime)value;
            var MaxDate = DateTime.Now.AddYears(-90);
            if (validationContext.ObjectInstance.GetType().FullName.Contains("EstudanteDTO"))
            {
                var MinDate = DateTime.Now.AddYears(-5).AddDays(-1);
                
                if(date.Between(MinDate, MaxDate))
                {
                    return ValidationResult.Success;
                }

            }
            if (validationContext.ObjectInstance.GetType().FullName.Contains("InstrutorDTO"))
            {
                var MinDate = DateTime.Now.AddYears(-18).AddDays(-1);
                
                if (date.Between(MinDate, MaxDate))
                {
                    return ValidationResult.Success;
                }

            }
            return new ValidationResult(GetErrorMessage());
        }

        public static string GetErrorMessage()
        {
            return $"Idade não permitida!";
        }
    }
}
