using OnClass.Domain.Models;
using OnClass.Infra.Context;
using OnClass.Infra.Repositories.Interfaces;

namespace OnClass.Infra.Repositories
{
    public class DisciplinaRepository : BaseRepository<Disciplina>, IDisciplinaRepository
    {
        public DisciplinaRepository(ApplicationContext context) : base(context)
        {
        }
        public DisciplinaRepository()
        {

        }

        public List<Disciplina> GetDisciplinasPorInstrutor(long instrutorId)
        {
            var disciplinas = _context.Disciplinas.Join(
                _context.InstrutorDisciplinas.Where(e => e.InstrutorId == instrutorId),
                disciplina => disciplina.Id,
                instrutorDisciplina => instrutorDisciplina.DisciplinaId,
                (disciplina, instrutorDisciplina) => new Disciplina{
                    Id = disciplina.Id,
                    Nome = disciplina.Nome
                });
            return disciplinas.ToList();
        }

        public List<Disciplina> GetDisciplinasPorEstudante(long estudanteId)
        {
            var disciplinas = _context.Disciplinas.Join(
                _context.EstudanteDisciplinas.Where(e => e.EstudanteId == estudanteId),
                disciplina => disciplina.Id,
                estudanteDisciplina => estudanteDisciplina.DisciplinaId,
                (disciplina, estudanteDisciplina) => new Disciplina
                {
                    Id = disciplina.Id,
                    Nome = disciplina.Nome
                });
            return disciplinas.ToList();
        }
    }
}
