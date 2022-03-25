using OnClass.Infra.Repositories;

namespace OnClass.Infra.UnitOfWork
{
    public interface IUnitOfWork
    {
        AulaRepository AulaRepository { get; }
        DisciplinaRepository DisciplinaRepository { get; }
        DocumentoAulaRepository DocumentoAulaRepository { get; }
        EstudanteRepository EstudanteRepository { get; }
        EstudanteDisciplinaRepository EstudanteDisciplinaRepository { get; }
        FrequenciaAulaRepository FrequenciaAulaRepository { get; }
        InstrutorRepository InstrutorRepository { get; }
        InstrutorDisciplinaRepository InstrutorDisciplinaRepository { get; }
        UserRepository UserRepository { get; } 

        void Commit();
    }
}