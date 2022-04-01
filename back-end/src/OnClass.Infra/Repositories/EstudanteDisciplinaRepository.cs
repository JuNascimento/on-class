using OnClass.Domain.Models;
using OnClass.Infra.Context;
using OnClass.Infra.Repositories.Interfaces;

namespace OnClass.Infra.Repositories
{
    public class EstudanteDisciplinaRepository : BaseRepository<EstudanteDisciplina>, IEstudanteDisciplinaRepository
    {
        public EstudanteDisciplinaRepository(ApplicationContext context) : base(context)
        {
        }
        public EstudanteDisciplinaRepository()
        {

        }
    }
}
