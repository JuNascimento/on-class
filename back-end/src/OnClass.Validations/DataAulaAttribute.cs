using OnClass.Extensions;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OnClass.Validations
{
    public class DataInicioAulaAttribute : ValidationAttribute
    {
        protected override ValidationResult IsValid(
        object value, ValidationContext validationContext)
        {
            var date = (DateTime)value;
            var MinDate = DateTime.Now.AddMinutes(-1);
            var MaxDate = DateTime.Now.AddMonths(3);

            if (date.Between(MinDate, MaxDate) && date.ValidarHoraDia())
            {
                return ValidationResult.Success;
            }
            return new ValidationResult(GetErrorMessage());
        }

        public static string GetErrorMessage()
        {
            return $"Data não permitida!";
        }
    }

    public class DataFimAulaAttribute : ValidationAttribute
    {
        protected override ValidationResult IsValid(
        object value, ValidationContext validationContext)
        {
            var dateFim = (DateTime)value;
            var dataInicioProperty = validationContext.ObjectInstance.GetType().GetProperty("DataInicio");
            var dataInicioValor = (DateTime)dataInicioProperty.GetValue(validationContext.ObjectInstance);

            var dataCorreta = dateFim.Between(dataInicioValor.AddHours(1).AddSeconds(-1), dateFim.AddSeconds(1));
            var horarioValido = dateFim.AddHours(1).ValidarHoraDia();

            if (dataCorreta && horarioValido)
            {
                return ValidationResult.Success;
            }
            return new ValidationResult(GetErrorMessage());
        }

        public static string GetErrorMessage()
        {
            return $"Data não permitida!";
        }
    }
}
