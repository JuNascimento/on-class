using OnClass.Domain.Models;

namespace OnClass.Infra.Repositories.Interfaces
{
    public interface IAulaRepository : IBaseRepository<Aula>
    {
        List<Aula> BuscarAulas(List<long?> instrutoresId, List<long?> disciplinas, DateTime dataInicio, DateTime dataFim);
    }
}
