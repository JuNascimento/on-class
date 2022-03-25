using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OnClass.Domain.Models
{
    public class Instrutor : BaseModel
    {
        public string NomeCompleto { get; set; }
        public DateTime DateNascimento { get; set; }
        public string Cpf { get; set; }
        public long UserId { get; set; }

    }
}
