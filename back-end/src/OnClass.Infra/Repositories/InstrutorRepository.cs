using Microsoft.EntityFrameworkCore;
using OnClass.Domain.Models;
using OnClass.Infra.Context;
using OnClass.Infra.Repositories.Interfaces;

namespace OnClass.Infra.Repositories
{
    public class InstrutorRepository : BaseRepository<Instrutor>, IInstrutorRepository
    {
        public InstrutorRepository(ApplicationContext context) : base(context)
        {
        }
        public InstrutorRepository()
        {

        }

        public async Task<Instrutor> GetInstrutorByUserId(long userId)
        {
            var instrutor = await _context.Instrutores.SingleOrDefaultAsync(e => e.UserId == userId);
            return instrutor;
        }
    }
}
