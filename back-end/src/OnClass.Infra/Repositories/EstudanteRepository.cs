using OnClass.Domain.Models;
using OnClass.Infra.Context;
using OnClass.Infra.Repositories.Interfaces;
using System.Data.Entity;

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

        public async Task<Estudante> GetEstudanteByUserId(long userId)
        {
            var estudante = await _context.Estudantes.SingleOrDefaultAsync(e => e.UserId == userId);
            return estudante;
        }
    }
}
