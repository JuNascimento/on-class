using OnClass.Domain.Models;
using OnClass.Exceptions;
using OnClass.Infra.Context;
using OnClass.Infra.Repositories.Interfaces;
using System.Data.Entity.Infrastructure;

namespace OnClass.Infra.Repositories
{
    public class InstrutorDisciplinaRepository : BaseRepository<InstrutorDisciplina>, IInstrutorDisciplinaRepository
    {
        public InstrutorDisciplinaRepository(ApplicationContext context) : base(context)
        {
        }
        public InstrutorDisciplinaRepository()
        {

        }

        public async Task<bool> InserirDisplicinasDoInstrutor(List<InstrutorDisciplina> instrutorDisciplinasList)
        {
            try
            {
                _context.InstrutorDisciplinas.AddRange(instrutorDisciplinasList);
                await _context.SaveChangesAsync();
                return true;
            }
            catch (DbUpdateException e)
            {
                if (e.InnerException.Message.Contains("Duplicate entry"))
                {
                    throw new DuplicatedEntryException($"Já existe um registro com o mesmo valor.");
                }
                throw new Exception($"{e.Message}\nStackTrace:{e.StackTrace}");
            }
            catch (Exception e)
            {
                throw new Exception($"{e.Message}\nStackTrace:{e.StackTrace}");
            }
        }
    }
}
