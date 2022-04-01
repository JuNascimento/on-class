using OnClass.Domain.Models;
using OnClass.Infra.Context;
using OnClass.Infra.Repositories.Interfaces;

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
    }
}
