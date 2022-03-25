using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OnClass.Domain.Models
{
    public class FrequenciaAula : BaseModel
    {
        public long AulaId { get; set; }
        public long EstudanteId { get; set; }
    }
}
