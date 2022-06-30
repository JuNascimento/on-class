using OnClass.Extensions;
using System.ComponentModel.DataAnnotations;

namespace OnClass.Validations
{
    public class AgeCheckAttribute : ValidationAttribute
    {
        protected override ValidationResult IsValid(
        object value, ValidationContext validationContext)
        {
            var dataAtual = DateTime.Now.Date;
            var date = (DateTime)value;
            var MinDate = dataAtual.AddYears(-90);

            if (validationContext.ObjectInstance.GetType().FullName.Contains("EstudanteDTO"))
            {
                var MaxDate = dataAtual.AddYears(-5).AddDays(-1);
                
                if(date.Between(MinDate, MaxDate))
                {
                    return ValidationResult.Success;
                }

            }
            if (validationContext.ObjectInstance.GetType().FullName.Contains("InstrutorDTO"))
            {
                var MaxDate = dataAtual.AddYears(-18);
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
