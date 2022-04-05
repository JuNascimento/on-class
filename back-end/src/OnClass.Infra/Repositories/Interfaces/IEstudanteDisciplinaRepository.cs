using OnClass.Domain.Models;

namespace OnClass.Infra.Repositories.Interfaces
{
    public interface IEstudanteDisciplinaRepository : IBaseRepository<EstudanteDisciplina>
    {
        Task<bool> InserirDisplicinasDoEstudante(List<EstudanteDisciplina> estudanteDisciplinasList);
    }
}
