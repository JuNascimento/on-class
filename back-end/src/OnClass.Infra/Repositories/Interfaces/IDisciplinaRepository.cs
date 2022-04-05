using OnClass.Domain.Models;

namespace OnClass.Infra.Repositories.Interfaces
{
    public interface IDisciplinaRepository : IBaseRepository<Disciplina>
    {
        List<Disciplina> GetDisciplinasPorInstrutor(long instrutorId);
        List<Disciplina> GetDisciplinasPorEstudante(long estudanteId);
    }
}
