using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OnClass.DTO
{
    public class DisciplinasParaLecionarDTO
    {
        public InstrutorBasicDTO InstrutorDTO { get; set; }
        public List<DisciplinaDTO> DisciplinasDTO { get; set; }
    }
}
