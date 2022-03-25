using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OnClass.Domain.Models
{
    public class EstudanteDisciplina : BaseModel
    {
        public long EstudanteId { get; set; }
        public long DisciplinaId { get; set; }

    }
}
