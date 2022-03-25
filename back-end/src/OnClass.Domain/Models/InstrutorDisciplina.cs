using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OnClass.Domain.Models
{
    public class InstrutorDisciplina : BaseModel
    {
        public long InstrutorId { get; set; }
        public long DisciplinaId { get; set; }
    }
}
