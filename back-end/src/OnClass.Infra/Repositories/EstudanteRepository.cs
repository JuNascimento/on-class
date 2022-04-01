using OnClass.Domain.Models;
using OnClass.Infra.Context;
using OnClass.Infra.Repositories.Interfaces;

namespace OnClass.Infra.Repositories
{
    public class EstudanteRepository : BaseRepository<Estudante>, IEstudanteRepository
    {
        public EstudanteRepository(ApplicationContext context) : base(context)
        {
        }
        public EstudanteRepository()
        {

        }
    }
}
