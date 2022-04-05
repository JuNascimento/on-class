using OnClass.Domain.Models;

namespace OnClass.Infra.Repositories.Interfaces
{
    public interface IInstrutorDisciplinaRepository : IBaseRepository<InstrutorDisciplina>
    {
        public Task<bool> InserirDisplicinasDoInstrutor(List<InstrutorDisciplina> instrutorDisciplinasList);
    }
}
