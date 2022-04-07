using OnClass.Domain.Models;
using OnClass.Exceptions;
using OnClass.Infra.Context;
using OnClass.Infra.Repositories.Interfaces;
using System.Data.Entity.Infrastructure;

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

        public async Task<bool> InserirDisplicinasDoEstudante(List<EstudanteDisciplina> estudanteDisciplinasList)
        {
            try
            {
                _context.EstudanteDisciplinas.AddRange(estudanteDisciplinasList);
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
