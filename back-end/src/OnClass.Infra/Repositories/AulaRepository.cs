using OnClass.Domain.Models;
using OnClass.Infra.Context;
using OnClass.Infra.Repositories.Interfaces;
using System.Linq;

namespace OnClass.Infra.Repositories
{
    public class AulaRepository : BaseRepository<Aula>, IAulaRepository
    {
        public AulaRepository(ApplicationContext context) : base(context)
        {
        }
        public AulaRepository()
        {

        }

        public List<Aula> BuscarAulas(List<long?> instrutoresId, List<long?> disciplinas, DateTime dataInicio, DateTime dataFim)
        {
            var aulas = _context.Aulas.Where(e => 
            instrutoresId.Contains(e.InstrutorId) 
            || disciplinas.Contains(e.DisciplinaId)
            || (dataInicio <= e.DataInicio && e.DataInicio <= dataFim));

            return aulas.ToList();
        }
    }
}
