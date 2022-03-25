using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OnClass.Domain.Models
{
    public class Estudante : BaseModel
    {
        public string NomeCompleto { get; set; }
        public string NomeMae { get; set; }
        public DateTime DataNascimento { get; set; }
        public long UserId { get; set; }
    }
}
